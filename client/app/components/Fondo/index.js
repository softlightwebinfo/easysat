import React from 'react';
import PropTypes from 'prop-types';

const Fondo = ({children, fondo}) => (
    <div className={'Fondo'} style={{backgroundImage: `url(${fondo})`}}>
        {children}
    </div>
)
Fondo.propTypes = {
    fondo: PropTypes.string
};
export default Fondo;