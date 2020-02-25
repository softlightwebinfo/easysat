import React from 'react';
import PropTypes from 'prop-types';
import cx from 'bem-classnames';
const classes = {
    name: 'Card',
    modifiers: [
        'default'
    ]
};
const Card = ({children, className, ...props}) => (
    <div className={cx(classes, props, className)}>{children}</div>
);
Card.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.element,
        PropTypes.array,
    ]),
    default: PropTypes.bool
};
export default Card;