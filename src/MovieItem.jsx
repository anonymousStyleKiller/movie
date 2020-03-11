import React from "react";

let MovieItem = (props) => {
    return (
        <div >
            <p>{props.movie.title}</p>
            <button onClick={props.removeMovie.bind(this, props.movie)}>
                Delete movie
            </button>
        </div>
    );
};

export default MovieItem;