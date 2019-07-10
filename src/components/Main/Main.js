import { Movie } from '../Movie/Movie';
import React, { Component } from 'react';
import './Main.scss';
import { setUrl } from '../../actions/MainActions';





export class Main extends Component {
    

    componentWillMount() {      
        this.props.getMovies(this.props.filter.url);
    }

    componentDidMount() {
       
        window.addEventListener('scroll', this.handleOnScroll);
        
    }

    handleOnScroll = () => {
        
          let windowRelativeBottom = document.documentElement.getBoundingClientRect().bottom;
          if (windowRelativeBottom < document.documentElement.clientHeight + 50)
          {
              this.props.getMovies(this.props.filter.nextPage);
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