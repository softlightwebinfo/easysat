import React from 'react';
import PropTypes from 'prop-types';

const Card__body = ({children}) => (
    <div className={'Card__body'}>{children}</div>
);
Card__body.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.element,
        PropTypes.array,
    ])
};
export default Card__body;