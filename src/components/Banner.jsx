import React,{useState,useEffect} from 'react'
import './Banner.css';// import the css file to this jsx to style the component
import tmdbAxiosInstance from '../tmdbAxiosInstance';

function Banner({fetchUrl}) {
    const [movie,setMovie]= useState({})
    // console.log(fetchUrl);

    const base_url = "https://image.tmdb.org/t/p/original/";

    const fetchData = async () =>{
      const {data} = await tmdbAxiosInstance.get(fetchUrl)
      
    
    // console.log(data.results[Math.floor(Math.random()*data.results.length)]);
    setMovie(data.results[Math.floor(Math.random()*data.results.length)])
 
    }
    // console.log(movie);//allMovies is an array
    useEffect(()=>{
      fetchData()
    },[])
  return (
    <div className='banner' style={{
        height:'600px',
        backgroundSize:"cover",
        backgroundImage:`url(${base_url}/${movie?.backdrop_path})`,
        backgroundAttachment:'fixed'
    }}>
        {/* ithil ? use cheyunnathinte reason movie api call vazhi kittan oru delay undavum,so ath kittuvanenkil mathram slice cheyuka.? koduthilenkil movie kitttunathin munb slice nadann error kanikkum so ath ith vazhi solve cheyam */}
        <div className='banner_content'>
            <h1>{movie?.name}</h1>
            <h2>{movie?.overview?.slice(0,280)}...</h2>
        </div>
        </div>
  )
}

export default Banner