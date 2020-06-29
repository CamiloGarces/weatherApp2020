import React from 'react';
import PropTypes from 'prop-types';
import './styles.css';

const Location = ( { city } ) => {
    return (
    <div className='locationCont'>
        { city }
    </div>)
    
};

Location.propTypes = {
    city: PropTypes.string.isRequired,
};

export default Location;