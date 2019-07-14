import React, { Component } from 'react';
import { MoviesList } from '../components/MoviesList/MoviesList'
import { showDetails, hideDetails } from '../actions/MovieActions'
import { connect } from 'react-redux';
import { getMovies } from '../actions/MoviesActions';

export class Movies extends Component {
    render() {
        const { movies, 
                getMovies,
                filter, 
                showDetails,
                hideDetails,
                movie,
            } = this.props;
        return (
            <MoviesList 
            movies={movies}
            getMovies={getMovies}
            filter={filter}
            movie={movie}
            showDetails={showDetails}
            hideDetails={hideDetails}
            />
        );
    }
}

const mapStateToProps = state => {
    return ({
        movies: state.movies,
        filter: state.filter,
        movie: state.movie
    });
}

const mapDispatchToProps = dispatch => {
    return ({
        getMovies: (filter, page, inputValue) => dispatch( getMovies( filter, page, inputValue )),
        showDetails: ( title, overview, imagePath, popularity) => dispatch( showDetails(title, overview, imagePath, popularity) ),
        hideDetails: () => dispatch( hideDetails() ),
    });
}

export default connect( mapStateToProps, mapDispatchToProps )( Movies );