import React, { Component } from 'react';
import './Filter.css';

export class Filter extends Component {
    render() {
        return (
            <ul className="filter__list">
                <li className="filter__element">Popular</li>
                <li className="filter__element">Upcoming</li>
                <li className="filter__element">Top rated</li>
            </ul>
        );
    }
}