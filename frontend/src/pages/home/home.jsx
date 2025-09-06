import React, { useState } from 'react'
import './home.css';
import Header from '../../components/Header/Header';
import ExploreMenu from '../../components/ExploreMenu/ExploreMenu';
 import FoodDisplay from '../../components/FoodDisplay/FoodDisplay';
import AppDownload from '../../components/AppDownload/appDownload';

function Home({searchTerm} ) {
  const[category , setCategory]=useState("All")

  const images = [
    {
      image:
        "https://images.pexels.com/photos/1640773/pexels-photo-1640773.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      title: "Elevate Your Taste",
      description: " Discover the art of fine dining and enjoy unique, sophisticated dishes that will leave you craving more..",
      link: "https://example.com/landscape",
      buttonText: "Explore More",
    },

    {
      image:
        "https://images.pexels.com/photos/11161433/pexels-photo-11161433.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      title: "Elevate Your Taste",
      description: " Discover the art of fine dining and enjoy unique, sophisticated dishes that will leave you craving more..",
      link: "https://example.com/landscape",
      buttonText: "Explore More",
    },
    {
      image:
        "https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      title: "Craving Something New?",
      description: " Explore new flavors and find your next favorite dish. Our menu is always evolving with fresh ideas. ",
      link: "https://example.com/adventure",
      buttonText: "Discover Now",
    },

    {
      image:
        "https://images.pexels.com/photos/1199960/pexels-photo-1199960.jpeg?auto=compress&cs=tinysrgb&w=600",
      title: "Craving Something New?",
      description: " Explore new flavors and find your next favorite dish. Our menu is always evolving with fresh ideas. ",
      link: "https://example.com/adventure",
      buttonText: "Discover Now",
    },
  ];
  return (
    <>
      <Header images={images}/>
      <ExploreMenu category={category} setCategory={setCategory}/>
       <FoodDisplay  category={category} searchTerm={searchTerm} /> 
      <AppDownload/>
    </>
  
  )
}

export default Home