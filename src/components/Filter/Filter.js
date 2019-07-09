import React, { Component } from 'react';
import './Filter.scss';

export class Filter extends Component {
    render() {
        return (
            <ul className="filter">
                <li className="filter__item">Popular</li>
                <li className="filter__item">Upcoming</li>
                <li className="filter__item">Top rated</li>
            </ul>
        );
    }
}