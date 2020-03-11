import React from 'react';
import './App.css';
import moviesData from "./moviesData";
import MovieItem from "./MovieItem";


class App extends React.Component {
    constructor() {
        super();
        this.state = {
            movies: moviesData
        }    }

    removeMovie = movie => {
        const updateMovie = this.state.movies.filter(function (item) {
            return item.id !== movie.id;
        });
        console.log(updateMovie);
        this.setState({
            movie: updateMovie
        });
    }

    render() {
        return (
            <div>
                {this.state.movies.map((movie) => {
                    return (<MovieItem key={movie.id}
                                       movie={movie}
                                       removeMovie={this.removeMovie}/>)
                })}
            </div>
        );
    }

}


export default App;
