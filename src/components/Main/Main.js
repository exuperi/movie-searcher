import { Movie } from '../Movie/Movie';
import React, { Component } from 'react';
import './Main.scss';

export const config = {
    baseUrl:  'https://api.themoviedb.org/3',
    apiKey:   '1fafe97d2ee12ba14e11814dc5afeaa2',
    language: 'en-US',
}

export class Main extends Component {
    componentWillMount() {      
        this.props.getMovies(1);
    }

    componentDidMount() {
       
        window.addEventListener('scroll', this.handleOnScroll);
        
    }

    handleOnScroll = () => {
        
          let windowRelativeBottom = document.documentElement.getBoundingClientRect().bottom;
          if (windowRelativeBottom < document.documentElement.clientHeight + 50)
          {
             
              this.props.getMovies(this.props.main.page);
          }
 
    }
    
    render() {
        const { movies } = this.props.main;
        const moviesList = movies.map(
            ({ id, title, overview,
               poster_path: imagePath,
               vote_average: popularity, 
               release_date: releaseDate }) => (
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