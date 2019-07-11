import React, { Component } from 'react';
import { Movie } from './Movie'
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
        
          let windowRelativeBottom = document.documentElement.getBoundingClientRect().bottom;
          if (windowRelativeBottom < document.documentElement.clientHeight + 50)
          {
              this.props.getMovies(this.props.filter.currentFilter, this.props.movies.page);
          }
 
    }
    render() {

        const { moviesArray } = this.props.movies;
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
                   />
               )
        )
        return (
            <div className="wrapper">
                {moviesList}
            </div>
        );
    }
}