import React from 'react';
import PropTypes from 'prop-types';
import cx from 'bem-classnames';

const classes = {
    name: 'row'
};
const Row = ({children, className, ...props}) => (
    <div
        className={cx(classes, props, className)}
    >
        {children}
    </div>
);
Row.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.element,
        PropTypes.array
    ]),
    className: PropTypes.string
};
export default Row;