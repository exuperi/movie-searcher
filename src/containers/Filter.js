import React, { Component } from 'react';
import { FilterList } from '../components/Filter/FilterList'
import { FilterInput } from '../components/Filter/FilterInput'
import { connect } from 'react-redux';
import { filterChange, inputChange } from '../actions/FilterActions';
import { getMovies } from '../actions/MoviesActions';

export class Filter extends Component {
    render() {
        const { filterChange, getMovies, movies, inputChange, filter } = this.props;
        return (
            <div>
                <FilterInput 
                movies={movies}
                getMovies={getMovies}
                inputChange={inputChange}
                filter={filter}
                />
                <FilterList
                movies={movies}
                getMovies={getMovies}
                filterChange={filterChange}
                /> 
            </div>
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
        getMovies: (filter, page, inputValue) => dispatch( getMovies( filter, page, inputValue )),
        inputChange: value => dispatch( inputChange( value ) ),
    });
}

export default connect( mapStateToProps, mapDispatchToProps )( Filter );