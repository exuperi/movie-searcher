import React, { Component } from 'react';
import { Movie } from '../Movie/Movie'
import { MovieDetails } from '../MoviesDetails/MovieDetails'
import './MoviesList.scss'

export class MoviesList extends Component {
    componentWillMount() {

        const { getMovies } = this.props;
        const { currentFilter } = this.props.filter;
        const { page } = this.props.movies;
        getMovies( currentFilter, page);

    }
    componentDidMount() {
      
        window.addEventListener('scroll', this.handleOnScroll);
        
    }

    handleOnScroll = () => {
          const { filter, movies, getMovies } = this.props;
          let windowRelativeBottom = document.documentElement.getBoundingClientRect().bottom;
          if (windowRelativeBottom < document.documentElement.clientHeight + 50)
          {
            if( movies.page === 1){
                getMovies(filter.currentFilter, ++movies.page, filter.inputValue);
            }
            getMovies(filter.currentFilter, movies.page, filter.inputValue);
          }
 
    }
    render() {
        const { moviesArray } = this.props.movies;
        const { showDetails, hideDetails, movie } = this.props;
        const moviesList = moviesArray.map(
            ({ id, title, overview,
               poster_path: imagePath,
               vote_average: popularity
             }) => (
                   <Movie
                    key = {id}
                    id = { id }
                    imagePath = { imagePath }
                    overview = { overview }
                    popularity = { popularity }
                    title = { title }
                    showDetails={showDetails}
                    hideDetails={hideDetails}
                    details={movie.details}
                   />
               )
        
        )
    
        
        return (
            <div className="wrapper">
                <div className="movies-list">
                    {moviesList}
                </div>
                
                <div className="popup" style={this.props.movie.details ? {display: 'flex'} : {display: 'none'} }>
                    <MovieDetails 
                    title={movie.title}
                    overview={movie.overview}
                    popularity={movie.popularity}
                    imagePath={movie.imagePath}
                    hideDetails={hideDetails}
                    />
                    
                </div>
            </div>
        );
    }
}