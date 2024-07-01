import React, { Component } from "react";
import axios from "axios";
import ImageGallery from "/src/components/ImageGallery";
import Button from "/src/components/Button";
import Searchbar from "/src/components/Searchbar";
import Loader from "/src/components/Loader";
import "/src/components/styles.css"



export default class App extends Component {

  constructor() {
    super();
    this.state = {
      page:1,
      per_page:12,
      images:[],
      search:'',
      loading:false
    };
  }

  feachImages() {
    this.setState({loading:true})
    const apiKey = "43636213-16e765190282d34979b0ca235";
    axios.get(
      `https://pixabay.com/api/?q=${this.state.search}&key=${apiKey}&image_type=photo&orientation=horizontal&page=${this.state.page}&per_page=${this.state.per_page}` 
    ).then((res) =>{
      const {data} = res;
      this.setState({
        images: data.hits,
        loading:false
      })
    })
  }




  componentDidUpdate(_newProps, prevState){
    if(prevState.per_page !== this.state.per_page || prevState.search !== this.state.search){
      this.feachImages();
    }
    if(prevState.search !== this.state.search){
      this.setState({
        per_page:12
      })
    }
  }


  increment = () =>{
    this.setState((prev) =>({
      per_page : prev.per_page + 12
  }))
  }

  searchValue = (search) => {
    this.setState({
      search: search
    });
  };
    
  

  render() {
    return (
      <>
      
      <Searchbar onSubmit = {this.searchValue}/>
      <Loader loading = {this.state.loading}/>
      <ImageGallery images = {this.state.images}/>
      {this.state.images.length === 0 ? <div></div>:<Button increment = {this.increment}/>}
     
      
      </>
      
    );
  }
}


