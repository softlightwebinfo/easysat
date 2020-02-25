import React from 'react';
import PropTypes from 'prop-types';
import cx from 'bem-classnames';

const classes = {
    name: 'ItemGroup'
};
const ItemGroup = ({children, className, ...props}) => (
    <div className={cx(classes, props, className)}>
        {children}
    </div>
);
ItemGroup.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.element,
        PropTypes.array
    ])
};
export default ItemGroup;