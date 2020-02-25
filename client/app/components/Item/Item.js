import React from 'react';
import PropTypes from 'prop-types';
import cx from 'bem-classnames';

const classes = {
    name: 'Item'
};
const Item = ({children, className, ...props}) => (
    <div className={cx(classes, props, className)}>
        {children}
    </div>
);
Item.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.element,
        PropTypes.array
    ]),
    className: PropTypes.string
};
export default Item;