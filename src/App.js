import React, { useEffect, useState } from 'react';
import { IoCartOutline } from "react-icons/io5";
import './App.css';

import Moviebox from './Moviebox';
import Footer from './Footer';



const API_URL = "https://api.themoviedb.org/3/movie/popular?api_key=485f2c37929df1fa72e7c125d85fa252";

function App() {
  const [movies, setMovies] = useState([]);
  const [query, setQuery] = useState('');
  // const [cart, setCart] = useState();
  
  
  useEffect(() => {
    fetch(API_URL)
    .then((res)=>res.json())
    .then(data=>{
      console.log(data);
      setMovies(data.results);
    })
  }, [])

  const searchMovie = async(e) => {
    e.preventDefault();
    console.log('search');
    try {
        const url = `https://api.themoviedb.org/3/search/movie?api_key=485f2c37929df1fa72e7c125d85fa252&query=${ query }`;
        const res = await fetch(url);
        const data = await res.json();
        console.log(data);
        setMovies(data.results)
    } catch (e) {
        console.log(e)
    }   
}

  const changeHandle = (e) => {
        setQuery(e.target.value)
}

  return (

    <>
        <div className='nav-bar'>
          <nav className='nav'>
              <div className="logo">
                  <a href='index.html'>WaraMovie</a>
              </div>

              <form className="d-flex" onSubmit={ searchMovie } autoComplete="off">
                <input
                    type="search"
                    placeholder=" search movies"
                    className="input"
                    aria-label="search"
                    name="query"
                    value={query} onChange={ changeHandle } > 
                  </input>
                  <button className='search-btn' type="submit">Search</button>
              </form>

              <div className="cart">
                 <IoCartOutline className='cart-logo'/>
              </div>
          </nav>
        </div>

        <div className='main'>
            {movies.length > 0 ?(
              <div className='container'>
                <div className="grid">
                  {movies.map((movieReq)=>
                    <Moviebox key={movieReq.id} {...movieReq} movies ={movies} />)}
                    
                </div>
              </div>
            ) : (
              <div className="not-found">
                  <h1 > No movie name :  {query} </h1>

              </div>
            )}
        </div>
      <Footer/>
    </>
  );
}

export default App;
