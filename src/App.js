import React from 'react';
import './App.css';
// import moviesData from "./moviesData";
import MovieItem from "./MovieItem";

let API_URL = "http://api.themoviedb.org/3";
let API_KEY = "1c811a82f60c56ecb5d33a4629ef2bea";


//UI = fn(state, props)
class App extends React.Component {
    constructor() {
        super();
        this.state = {
            movies: [],
            moviesWillWatch: []
        }
    }

    componentDidMount() {
        fetch(`${API_URL}/discover/movie?api_key=${API_KEY}&sort_by=popularity.desc`).then((response) => {
            return response.json();
        }).then((data) => {
            this.setState({
                movies : data.results
            })
        });
    }

    removeMovie = movie => {
        const updateMovie = this.state.movies.filter(function (item) {
            return item.id !== movie.id;
        });
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

    removeMovieFromWillWatch = movie => {
        const updateMovieFromWillWatch = this.state.moviesWillWatch.filter(function (item) {
            return item.id !== movie.id;
        });
        this.setState(
            {
                moviesWillWatch: updateMovieFromWillWatch
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
                                                   removeMovieFromWillWatch={this.removeMovieFromWillWatch}
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
