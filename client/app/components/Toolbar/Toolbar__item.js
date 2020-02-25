import React from 'react';
import PropTypes from 'prop-types';
import cx from 'bem-classnames';

const classes = {
    name: 'Toolbar__item'
};
const Toolbar__item = ({children, className, ...props}) => (
    <div className={cx(classes, props, className)}>{children}</div>
);
Toolbar__item.propTypes = {
    className: PropTypes.string,
    children: PropTypes.oneOfType([
        PropTypes.element,
        PropTypes.array
    ])
};
export default Toolbar__item;