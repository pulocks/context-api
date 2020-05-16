import React from 'react';
import { useMovieContext } from '../../MovieContext';
import './Movies.css';

const Movies = () => {

    const movie = useMovieContext();
    const {movies} = movie;

    return (
        <div>
            <ol>
            {
                movies.map(movie => <li key={movie.id}>{`${movie.name}(${movie.id})--------${movie.price}TK`}</li>)
            }
            </ol>
        </div>
    );
};

export default Movies;