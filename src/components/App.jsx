import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import ImageGallery from "/src/components/ImageGallery";
import Button from "/src/components/Button";
import Searchbar from "/src/components/Searchbar";
import Loader from "/src/components/Loader";
import "/src/components/styles.css";

export default function App() {

    const [state, setState] = useState({
      page:1,
      per_page:12,
      images:[],
      search:'',
      loading:false
    });

    const prevSearch = useRef(state.search);

  const fetchImages = (()=>{
    setState({...state, loading:true})
    const apiKey = "43636213-16e765190282d34979b0ca235";
    axios.get(
      `https://pixabay.com/api/?q=${state.search}&key=${apiKey}&image_type=photo&orientation=horizontal&page=${state.page}&per_page=${state.per_page}` 
    ).then((res) =>{
      const {data} = res;
      setState(prevState => ({
        ...prevState, 
        images: prevSearch.current === state.search ? [...prevState.images, ...data.hits] : data.hits,
        loading:false,
        page: prevSearch.current === state.search ? prevState.page : 1

        
      }))
      prevSearch.current = state.search;
    })
  });



  useEffect(()=>{
      if(state.search){
        fetchImages();
      }
    }, [state.search, state.page])


  const increment = () => {
      setState((prev) =>({
        ...prev,
        page : prev.page + 1
    }))
  }

  const searchValue = (search) => {
    setState({
      ...state,
      search: search,
      images: [],
      page: 1
    });
  };


    return (
      <>
      
      <Searchbar onSubmit = {searchValue}/>
      <Loader loading = {state.loading}/>
      {state.images!== undefined ? <ImageGallery images = {state.images}/>:<div></div>}
      {state.images && state.images.length === 0  ? <div></div>:<Button increment = {increment}/>}
  
      </>
    );
}

