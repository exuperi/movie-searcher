import React, { Component } from 'react';
import { movieAction } from '../actions/MovieActions'
import { getMovies } from '../actions/MainActions'
import { Movie } from '../components/Movie/Movie'
import { Main } from '../components/Main/Main'
import { connect } from 'react-redux';
import './App.css';

const apiKey = '1fafe97d2ee12ba14e11814dc5afeaa2';

export const config = {
  api: 'https://api.themoviedb.org/3/search/movie?api_key=' + apiKey,
  imgUrl: 'https://image.tmdb.org/t/p/w300/',
}

class App extends Component {
  
  render() {
    const { filter, movie, main, getMoviesAction } = this.props;
    return (
      <div className="app">
      <Filter />
      <Main 
      filter={filter} 
      movie={movie} 
      main={main}
      getMovies={getMoviesAction}
      />
      </div>
      
    );
  }
}

const mapStateToProps = store => {
  return {
    filter: store.filter,
    movie: store.movie,
    main: store.main,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getMoviesAction: page => dispatch( getMovies (page) ),
  }
}




export default connect(mapStateToProps, mapDispatchToProps)(App);
