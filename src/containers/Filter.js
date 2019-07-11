import React, { Component } from 'react';
import { FilterList } from '../components/Filter/FilterList'
import { connect } from 'react-redux';
import { filterChange } from '../actions/FilterActions';
import { getMovies } from '../actions/MoviesActions';

export class Filter extends Component {
    render() {
        const { filterChange, getMovies, movies } = this.props;
        return (
            <FilterList
                // filter={filter}
                movies={movies}
                getMovies={getMovies}
                filterChange={filterChange}
            />
        );
    }
}

const mapStateToProps = state => {
    return ({
        filter: state.filter,
        movies: state.movies,
    });
}

const mapDispatchToProps = dispatch => {
    return ({
        filterChange: filter => dispatch( filterChange( filter ) ),
        getMovies: (filter, page) => dispatch( getMovies( filter, page )),
    });
}

export default connect( mapStateToProps, mapDispatchToProps )( Filter );