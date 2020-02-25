import React from 'react';
import PropTypes from 'prop-types';
import cx from 'bem-classnames';

const classes = {
    name: 'ArrowDesplegable'
};
const ArrowDesplegable = ({className, height, ...props}) => (
    <svg
        className={cx(classes, props, className)}
        width={height}
        height={height}
        fill="currentColor"
        viewBox="0 0 24 24"
    >
        <path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z"></path>
    </svg>
);
ArrowDesplegable.propTypes = {
    className: PropTypes.string,
    height: PropTypes.number
};
ArrowDesplegable.defaultProps = {
    height: 24
};
export default ArrowDesplegable;