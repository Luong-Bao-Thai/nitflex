import React, { useEffect, useState } from 'react';
import axios from './axios';
import requests from './requests';
import './Banner.css';

function Banner() {
    const [movie, setMovie] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(requests.fetchTrending);
            setMovie(request.data.results[
                Math.floor(Math.random() * request.data.results.length - 1)
            ]); 
        }
        fetchData();
    }, [])

    console.log(movie);

    function truncate(str, n) {
        return str?.length > n ? str.substr(0, n - 1) + "..." : str;
    };

  return (
    <header className='banner'
        style={{
            backgroundSize: "cover",
            backgroundImage: `url(
                "https://www.themoviedb.org/t/p/original/${movie?.backdrop_path}"
            )`,
            backgroundPosition: "50% 25%",
        }}
    >
        <div className='banner__contents'>
        {/* {Title} */}
        <h1 className='banner__title'>
            {movie?.title || movie?.name || movie?.original_name}
        </h1>
        {/* 2 btn */}
        <div className="banner__buttons">
            <button className="banner__button">Play</button>
            <button className="banner__button">My List</button>
        </div>
        {/* desc */}
        <h1 className="banner__description">
            {truncate(movie?.overview, 150)}
        </h1>
        </div>

        <div className='banner--fadeBottom'></div>

    </header>
  )
}

export default Banner