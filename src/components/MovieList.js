import React from "react";

const MovieList=(props) => {
    const FavouriteComponent=props.favouriteComponent;
    return (
        <div className='movie-list'>
            {props.movies.map((movie,index) => (
                <div className='image-container d-flex movie-item mx-2'>
                    <img src={movie.Poster} alt={movie.Title} className='img-fluid'></img>
                    <div onClick={props.handleFavouritesClick} className="overlay d-flex align-items-center justify-content-center"> <FavouriteComponent /></div>

                </div>

            ))}
        </div>
    );
};

export default MovieList;
