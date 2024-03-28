import { useEffect } from "react";
import { fetchDataFromApi } from "./utils/api"
import { useDispatch, useSelector } from 'react-redux'
import {getApiConfiguration} from './store/homeSlice'

import Header from './component/header/Header';
import Footer from './component/footer/Footer';
import Home from './pages/home/Home';
import Details from './pages/details/Details';
import SearchResult from './pages/searchResult/SearchResult';
import Explore from './pages/explore/Explore';
import PageNotFound from './pages/404/PageNotFound';


function App() {
  const {url} = useSelector((state)=> state.home);
  console.log(url);
  const dispatch = useDispatch();

  useEffect(()=>{
    apiTesting();
  },[])

  const apiTesting = () =>{
    fetchDataFromApi('/movie/popular')
    .then((res) => {
      console.log(res); 
      dispatch(getApiConfiguration(res))
    });
  };
  return (
    <>
     App
     {url?.total_pages}
    </>
  )
}

export default App
 