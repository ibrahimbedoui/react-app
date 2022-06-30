import React, { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { connect } from 'react-redux';
import { facebookAuthenticate } from '../actions/auth';
import queryString from 'query-string';

const Facebook = ({ facebookAuthenticate }) => {
    let location = useLocation();

    useEffect(() => {
        const values = queryString.parse(location.search);
        const state = values.state ? values.state : null;
        const code = values.code ? values.code : null;

        console.log('State: ' + state);
        console.log('Code: ' + code);

        if (state && code) {
            facebookAuthenticate(state, code);
        }
    }, [location]);

    return (
        <div className='container'>
         
        </div>
    );
};
//The connect() function connects a React component to a Redux store. It provides its connected component with the pieces of the data it needs from the store, and the functions it can use to dispatch actions to the store
export default connect(null, { facebookAuthenticate })(Facebook);