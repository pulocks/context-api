import React, { createContext, useState, useContext } from 'react';

export const myMovieContext = createContext(); 

export const MovieProvider = props => {
    const contextValue = MovieContext();
    return <myMovieContext.Provider value={contextValue}>{props.children}</myMovieContext.Provider>
}

export const useMovieContext = () => useContext(myMovieContext);

const MovieContext = () => {

    const [movies, setMovies] = useState([
        {
            name: 'Keyamot theke Keyamot',
            price: '550',
            id: 1
        },
        {
            name: 'Ontore Ontore',
            price: '500',
            id: 2
        },
        {
            name: 'Denmohor',
            price: '500',
            id: 3
        },
    ]);

    return {
        movies,
        setMovies
    }
};
