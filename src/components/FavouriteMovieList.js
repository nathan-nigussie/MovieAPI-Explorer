import React,{useState} from 'react';

const FavoriteMovies=() => {
    // Initial state to store the favorite movies
    const [favoriteMovies,setFavoriteMovies]=useState([]);
    const [newMovie,setNewMovie]=useState('');

    // Function to handle adding a new movie to the favorites list
    const addFavoriteMovie=() => {
        if(newMovie.trim()!=='') {
            setFavoriteMovies([...favoriteMovies,newMovie]);
            setNewMovie(''); // Clear the input field after adding the movie
        }
    };

    return (
        <div>
            <h1>My Favorite Movies</h1>
            <input
                type="text"
                value={newMovie}
                onChange={(e) => setNewMovie(e.target.value)}
                placeholder="Enter movie name"
            />
            <button onClick={addFavoriteMovie}>Add to Favorites</button>
            <ul>
                {favoriteMovies.map((movie,index) => (
                    <li key={index}>{movie}</li>
                ))}
            </ul>
        </div>
    );
};

export default FavoriteMovies;
