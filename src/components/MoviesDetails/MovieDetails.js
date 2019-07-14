import React, { Component } from 'react';
import './MovieDetails.scss';

export class MovieDetails extends Component {
    render() {
        const { title, overview, imagePath, popularity } = this.props;
        return(
            <div className="details">
                <div className="details__poster" style={{ backgroundImage: `url(${imagePath})`}}>

                </div>
                <div className="details__sidebar">
                    <h3 className="details__title">
                        {title}
                    </h3>
                    <p className="details__overview">
                        {overview}
                    </p>
                    <span className="details__popularity">
                        {popularity.toFixed(2)}
                    </span>
                </div>
                
            </div>
        );
    }
}