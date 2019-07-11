import React, { Component } from 'react';
import './FilterList.scss';

export class FilterList extends Component {
    onClickHandler= e => {
        e.preventDefault();
        const { getMovies, filterChange, movies } = this.props;
        const filter = e.currentTarget.innerText.toLowerCase();
        filterChange(filter);
        let arrLength = movies.moviesArray.length; 
        movies.moviesArray.splice(0, arrLength);
        movies.page = 1;
        getMovies( filter, movies.page);
        
    }
    render() {
        return (
            <ul className="filter">
                <li className="filter__item" onClick={this.onClickHandler}>Popular</li>
                <li className="filter__item" onClick={this.onClickHandler}>Upcoming</li>
                <li className="filter__item" onClick={this.onClickHandler}>Top_rated</li>
            </ul>
        );
    }
}