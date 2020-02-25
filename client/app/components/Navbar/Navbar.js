import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import cx from 'bem-classnames';

const classes = {
    name: 'Navbar',
    modifiers: []
};
const Navbar = ({className, children, ...props}) => (
    <div className={cx(classes, props, className)}>
        {children}
    </div>
);
Navbar.propTypes = {
    className: PropTypes.string,
    children: PropTypes.oneOfType([
        PropTypes.element,
        PropTypes.array
    ])
};
export default Navbar;