//함수형 컴포넌트

import React from 'react';
import PropType from 'prop-types';
import './Movie.css';
import { Link } from 'react-router-dom';

//class -> className으로 변경(HTML과 JSX의 class이름이 겹치기에 className으로 변경)
//summary는 180자로 제한
function Movie({ title, year, summary, poster, genres }){
    return (
        <div className="movie">
            <Link to={{
                pathname: '/movie-detail',
                state: { year, title, summary, poster, genres },
            }}>
            <img src={poster} alt={title} title={title} />  
            <div className="movie__data">
                <h3 className="movie__title">{title}</h3>
                <h5 className="movie__year">{year}</h5>
                <ul className="movie__genre"> 
                    {genres.map((genre, index) => {
                        return (
                        <li key={index} className="movie__genre"> 
                            {genre}
                        </li>
                        );
                    })}
                </ul>
                <p className="movie__summary">{summary.slice(0, 180)}...</p>
            </div>
            </Link>
        </div>
    ); 
}

Movie.prototype = { 
    year: PropType.number.isRequired,    //year : number 며 필수 조건
    title: PropType.string.isRequired,   //title : string 며 필수 조건
    summary: PropType.string.isRequired, //summary : string 며 필수 조건
    poster: PropType.string.isRequired,  //poster : string 며 필수 조건
    genres: PropType.arrayOf(PropType.string).isRequired, //genres: 문자열을 원소로 하는 배열이며 필수 조건 
 };

export default Movie;