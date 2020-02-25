import React from 'react';
import PropTypes from 'prop-types';
import cx from 'bem-classnames';
const classes = {
    name: 'Card__title'
};
const Card__title = ({children, className, ...props}) => (
    <h3 className={cx(classes, props, className)}>{children}</h3>
);
Card__title.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.element,
        PropTypes.array,
        PropTypes.string,
    ]).isRequired
};
export default Card__title;