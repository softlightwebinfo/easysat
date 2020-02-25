import React from 'react';
import PropTypes from 'prop-types';
import cx from 'bem-classnames';

const classes = {
    name: 'DropDownMenu'
};
const DropDownMenu = ({className, children, ...props}) => (
    <div className={cx(classes, props, className)}>
        {children}
    </div>
);
DropDownMenu.propTypes = {
    className: PropTypes.string,
    children: PropTypes.oneOfType([
        PropTypes.element,
        PropTypes.array
    ])
};
export default DropDownMenu;