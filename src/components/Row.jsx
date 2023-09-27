import React, { useEffect, useState } from 'react'
import tmdbAxiosInstance from '../tmdbAxiosInstance';
import './Row.css';

function Row({title,fetchUrl,isPoster}) {//isPoster is a boolean value so athine string aayit kodukkan pattila,so oru vriable pole ${}il venam ath kodukkan
  const [allMovies,setAllMovies]= useState([])
    // console.log(fetchUrl);

    const base_url = "https://image.tmdb.org/t/p/original/";

    const fetchData = async () =>{
      const {data} = await tmdbAxiosInstance.get(fetchUrl)
      setAllMovies(data.results);
    }
    // console.log(allMovies);//allMovies is an array
    useEffect(()=>{
      fetchData()
    },[])

  return (
    <div className='row'>
       <h1>{title}</h1>
       <div className="all_movies">
        {
          allMovies.map(item =>(
            <img className= {`${isPoster&&'movie_large'} movie`} src={`${base_url}/${isPoster?item.poster_path:item.backdrop_path}`} alt="no image" />
          ))
        }

       </div>
    </div>
  )
}

export default Row
