import React, { Component } from 'react';
import './Movie.css';

const options = {
    imgUrl: 'https://image.tmdb.org/t/p/w300/',

}

export class Movie extends Component {
    render() {
        const { id, imagePath, popularity } = this.props;
        let image = imagePath !== undefined ? imagePath : 'kqjL17yufvn9OVLyXYpvtyrFfak.jpg';
        image = options.imgUrl + image;
        return (
            <div 
                className="img"
                id = { id }
                style = { { backgroundImage: `url(${image})` } } >
            
                <span>{popularity}</span>
            </div>
        );
    }
}