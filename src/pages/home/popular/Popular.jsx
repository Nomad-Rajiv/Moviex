import React, { useState } from 'react'
import ContentWrapper from '../../../component/contentWrapper/ContentWrapper';
import SwitchTabs from '../../../component/switchTabs/SwitchTabs';
import useFetch from '../../../hooks/useFetch';
import Carousel from '../../../component/carousel/Carousel';

const Popular = () => {
  const [endPoint, setEndPoint] = useState("movie");

  const { data, loading } = useFetch(`/${endPoint}/popular`);
  
  
  const onTabChange = (tab) =>{
    setEndPoint(tab === "Movies" ? "movie" : "tv");
  }; 



  return (

    <div className='carouselSection'>
      <ContentWrapper>
        <span className="carouselTitle">What's Popular</span>
        <SwitchTabs data={["Movies", "TV Shows"]} onTabChange={onTabChange} endPoint={endPoint}/>
      </ContentWrapper>
      <Carousel data={data?.results} loading={loading}/>

    </div>
  )
}

export default Popular;