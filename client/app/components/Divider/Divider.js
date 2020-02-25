import React from 'react';
import PropTypes from 'prop-types';
import cx from 'bem-classnames';

const classes = {
    name: 'Divider'
};
const Divider = ({className, style, ...props}) => (
    <div className={cx(classes, props, className)}></div>
);
Divider.propTypes = {
    className: PropTypes.string,
    style: PropTypes.object
};
export default Divider;
