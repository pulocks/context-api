import React, { useState } from 'react';
import { useMovieContext } from '../../MovieContext';
import './AddMovie.css';

const AddMovie = () => {

    const movie = useMovieContext();
    const {movies, setMovies} = movie;
    
    const [newMovie, setNewMovie] = useState({
        name: '',
        price: '',
        id: null
    });

    const handleChange = event => {

        const movieInfo = {...newMovie};
        movieInfo.id = movies.length + 1;

        if(event.target.name === 'movie') {
            movieInfo.name = event.target.value;
        }
        else if(event.target.name === 'price') {
            movieInfo.price = event.target.value;
        }

        setNewMovie(movieInfo);

    }

    const addedMovie = event => {
        event.preventDefault();
        event.target.reset();
        setMovies([...movies, newMovie]);
    }

    return (
        <div className="add-movie">
            <h2>Add Movie details below:</h2>
            <form onSubmit={addedMovie}>
                <input type="text" name="movie" placeholder="movie name" onChange={handleChange} required/>
                <br/>
                <input type="text" name="price" placeholder="movie price" onChange={handleChange} required/>
                <br/>
                <button>Submit</button>
            </form>
        </div>
    );
};

export default AddMovie;