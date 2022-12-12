import React, { useState } from 'react';
import { AiFillPlusCircle } from "react-icons/ai";
import './Moviebox.css';

const API_IMG = "https://image.tmdb.org/t/p/w500/";


const Moviebox = ({ title, poster_path, vote_average,id, movieReq}) => {

    return(
        <div className="movieCard">
            
            <div className="poster">
                <img src={ API_IMG + poster_path } alt="" />
                
                <p className='vote'>vote average : { vote_average }</p>
                <div className="btn-add">
                    <h1 >{ title }</h1>
                    <AiFillPlusCircle className="add" data-hover="ADD TO CART"/>
                </div>
                
                
            </div>
            <div className="title">
                <h1 >{ title }</h1>
            </div>
            
            
        </div>
    )
}

export default Moviebox;