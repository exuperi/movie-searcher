import React, { Component } from 'react';
import './FilterInput.scss';

export class FilterInput extends Component {
    onBtnClickHandler= e => {
        e.preventDefault();
        const { getMovies, movies, filter } = this.props;
        let inputText = filter.inputValue.toString();
        console.log(inputText);
        let arrLength = movies.moviesArray.length; 
        movies.moviesArray.splice(0, arrLength);
        movies.page = 1;
        getMovies( filter.currentFilter, movies.page, inputText );
        
    }
    onChangeHandler = e => {
        e.preventDefault();
        const inputValue = e.target.value;
        const { inputChange } = this.props;
        console.log(inputValue);
        inputChange(inputValue);
    }
    
    render() {
        return (
            <form className='filter__form'>
                <input type='text' onChange={this.onChangeHandler} placeholder='Search for movies...'></input>
                <button type='button' onClick={this.onBtnClickHandler} >Click</button>
            </form>
        );
    }
}