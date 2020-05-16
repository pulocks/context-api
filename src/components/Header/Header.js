import React from 'react';
import './Header.css';
import { useMovieContext } from '../../MovieContext';

const Header = () => {

    const movie = useMovieContext();

    const {movies} = movie;

    return (
        <div className="header">
            <ul>
                <li><a href="/">Home</a></li>
                <li><a href="/">Movies</a></li>
                <li>Total Movie: {movies.length}</li>
            </ul>
        </div>
    );
};

export default Header;