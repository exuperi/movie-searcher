import React, { Component } from 'react';
import './Filter.scss';

export class Filter extends Component {
    onBtnClickHandler= e => {
        e.preventDefault();

        const filter = e.currentTarget.innerText.toLowerCase();
        console.log(filter);
        this.props.filterChange(filter);
    }
    render() {
        return (
            <ul className="filter">
                <li className="filter__item" onClick={this.onBtnClickHandler}>Popular</li>
                <li className="filter__item" onClick={this.onBtnClickHandler}>Upcoming</li>
                <li className="filter__item" onClick={this.onBtnClickHandler}>Top rated</li>
            </ul>
        );
    }
}