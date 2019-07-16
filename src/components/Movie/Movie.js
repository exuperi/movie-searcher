import React, { Component } from 'react';
import './Movie.scss';

export const options = {
    imgUrl: 'https://image.tmdb.org/t/p/w300/',

}

export class Movie extends Component {
    onClickHandler = () => {
        const { title, overview, imagePath, popularity, releaseDate } = this.props;
        const image = options.imgUrl + imagePath;
        this.props.showDetails( title, overview, image, popularity, releaseDate);
    }

    render() {
        const { id, imagePath, popularity } = this.props;
        let image = imagePath !== undefined ? imagePath : 'kqjL17yufvn9OVLyXYpvtyrFfak.jpg';
        image = options.imgUrl + image;
        return (
            <div 
                className="img"
                id = { id }
                style = { { backgroundImage: `url(${image})` } } 
                onClick={this.onClickHandler}>  
                             
                <span className='popularity'>{popularity.toFixed(1)}</span>
            </div>
        );
    }
}