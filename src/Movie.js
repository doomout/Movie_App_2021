//함수형 컴포넌트

import React from 'react';
import PropType from 'prop-types';

function Movie({ id, title, year, summary, poster }){
    return <h4>{title}</h4>;
}

Movie.prototype = { 
    id: PropType.number.isRequired,      //id : number 며 필수 조건
    year: PropType.number.isRequired,    //year : number 며 필수 조건
    title: PropType.string.isRequired,   //title : string 며 필수 조건
    summary: PropType.string.isRequired, //summary : string 며 필수 조건
    poster: PropType.string.isRequired,  //poster : string 며 필수 조건
 };

export default Movie;