import React, { Component } from 'react';
import { MoviesList } from '../components/Movie/MoviesList'
import { connect } from 'react-redux';
import { getMovies } from '../actions/MoviesActions';

export class Movies extends Component {
    render() {
        const { movies, getMovies, filter } = this.props;
        return (
            <MoviesList 
            movies={movies}
            getMovies={getMovies}
            filter={filter}
            />
        );
    }
}

const mapStateToProps = state => {
    return ({
        movies: state.movies,
        filter: state.filter,

    });
}

const mapDispatchToProps = dispatch => {
    return ({
        getMovies: (filter, page) => dispatch( getMovies( filter, page )),
    });
}

export default connect( mapStateToProps, mapDispatchToProps )( Movies );