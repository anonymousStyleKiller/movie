import React from 'react';
import './App.css';
import moviesData from "./moviesData";
import MovieItem from "./MovieItem";

//UI = fn(state, props)
class App extends React.Component {
    constructor() {
        super();
        this.state = {
            movies: moviesData,
            moviesWillWatch: []
        }
    }

    removeMovie = movie => {
        const updateMovie = this.state.movies.filter(function (item) {
            return item.id !== movie.id;
        });
        console.log(updateMovie);
        this.setState(
            {
            movies: updateMovie
        });
    };

    addMovieToWillWatch = movie => {
        const updateWillWatch = [...this.state.moviesWillWatch, movie];
        this.setState(
            {
                moviesWillWatch: updateWillWatch
            });
    };

    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-9">
                        <div className="row">
                            {this.state.movies.map((movie) => {
                                return (
                                    <div className="col-6 mb-4" key={movie.id}>
                                        <MovieItem movie={movie}
                                                   removeMovie={this.removeMovie}
                                                   addMovieToWillWatch={this.addMovieToWillWatch}
                                        />
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                    <div className="col-3">
                        <p>Will Watch: {this.state.moviesWillWatch.length}</p>
                    </div>

                </div>
            </div>
        );
    }

}


export default App;
