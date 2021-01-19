import React, { Component } from 'react';
import withToggler from './HOC/withToggler';

function Favorite(props) {
    return (
        <div>
            <h3>Click heart to favorite</h3>
            <h1>
                <span style={{ cursor: 'pointer' }} onClick={props.toggle}>
                    {props.on ? '❤️' : '♡'}
                </span>
            </h1>
        </div>
    );
}

export default withToggler(Favorite, { defaultOnValue: false });
