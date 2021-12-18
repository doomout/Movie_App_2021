//함수형 컴포넌트

import React from 'react';
import PropType from 'prop-types';

function Movie({ title, year, summary, poster }){
    return (
        <div class="movie">
            <img src={poster} alt={title} title={title} />  
            <div class="movie__data">
                <h3 class="movie__title">{title}</h3>
                <h5 class="movie__year">{year}</h5>
                <p class="movie__summary">{summary}</p>
            </div>
        </div>
    ); 
}

Movie.prototype = { 
    year: PropType.number.isRequired,    //year : number 며 필수 조건
    title: PropType.string.isRequired,   //title : string 며 필수 조건
    summary: PropType.string.isRequired, //summary : string 며 필수 조건
    poster: PropType.string.isRequired,  //poster : string 며 필수 조건
 };

export default Movie;