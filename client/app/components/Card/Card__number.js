import React from 'react';
import PropTypes from 'prop-types';
import cx from 'bem-classnames';

const classes = {
    name: 'Card__number'
};
const Card__number = ({children, className, ...props}) => (
    <div className={cx(classes, props, className)}>
        {children}
    </div>
);
Card__number.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number,
        PropTypes.element
    ]),
    className: PropTypes.string
};
export default Card__number;