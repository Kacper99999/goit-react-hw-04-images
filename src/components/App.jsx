import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import ImageGallery from "/src/components/ImageGallery";
import Button from "/src/components/Button";
import Searchbar from "/src/components/Searchbar";
import Loader from "/src/components/Loader";
import "/src/components/styles.css"

export default function App() {

    const [state, setState] = useState({
      page:1,
      per_page:12,
      images:[],
      search:'',
      loading:false
    });

    const prevPer_page = useRef(state.per_page);
    const prevSearch = useRef(state.search);

  const fetchImages = (()=>{
    setState({...state, loading:true})
    const apiKey = "43636213-16e765190282d34979b0ca235";
    axios.get(
      `https://pixabay.com/api/?q=${state.search}&key=${apiKey}&image_type=photo&orientation=horizontal&page=${state.page}&per_page=${state.per_page}` 
    ).then((res) =>{
      const {data} = res;
      setState(prev => ({
        ...prev, 
        images: data.hits,
        loading:false
      }))
    })
  });

  useEffect(()=>{

    if(prevPer_page.current !== state.per_page || prevSearch.current !== state.search){
      fetchImages();
    }
    if(prevSearch.current !== state.search){
      setState(prev => ({
        ...state,
        per_page : prev.per_page + 12
      }))
      fetchImages();
    }
    prevPer_page.current = state.per_page;
    prevSearch.current = state.search;

  },[state.per_page, state.search]);


  const increment = () => {
    setState((prev) =>({
      per_page : prev.per_page + 12
  }))
  }

  const searchValue = (search) => {
    setState({
      ...state,
      search: search
    });
  };

  setTimeout(()=>{
    console.log(state.images)
  },1000)

    return (
      <>
      
      <Searchbar onSubmit = {searchValue}/>
      <Loader loading = {state.loading}/>
      {state.images!== undefined ? <ImageGallery images = {state.images}/>:<div></div>}
      {state.images && state.images.length === 0  ? <div></div>:<Button increment = {increment}/>}
  
      </>
    );
}


