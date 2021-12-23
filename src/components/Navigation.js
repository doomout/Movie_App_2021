import React from 'react';
import { Link } from 'react-router-dom';
import './Navigation.css';

//전체 새로고침을 막기 위해 a -> Link 사용
function Navigation(props) {
    console.log(props);
    return (
        <div className="nav">
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
        </div>
    );
}

export default Navigation;