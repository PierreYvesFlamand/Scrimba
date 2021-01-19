import React, { useState } from 'react';

import MovieCard from './MovieCard';

export default function SearchMovies() {
    const [query, setQuery] = useState('Jurassic Park');
    const [movies, setMovies] = useState([]);

    const searchMovies = async (e) => {
        e.preventDefault();
        const url = `https://api.themoviedb.org/3/search/movie?api_key=bf9fe072dcfcb018a7ec763c05fb86c2&language=en-US&query=${query}&page=1&include_adult=false`;

        try {
            const response = await fetch(url);
            const data = await response.json();
            console.log(data);
            setMovies(data.results);
        } catch (err) {
            console.error(err);
        }
    };

    return (
        <>
            <form className='form' onSubmit={searchMovies}>
                <label htmlFor='query' className='label'>
                    Movie Name
                </label>
                <input
                    type='text'
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    className='input'
                    name='query'
                    placeholder='i.e. Jurassic Park'
                />
                <button className='button'>Search</button>
            </form>
            <div className='card-list'>
                {movies
                    .filter((movie) => movie.poster_path)
                    .map((movie) => (
                        <MovieCard movie={movie} key={movie.id} />
                    ))}
            </div>
        </>
    );
}
