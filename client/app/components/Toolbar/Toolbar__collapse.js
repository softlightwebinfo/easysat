import React from 'react';
import PropTypes from 'prop-types';
import cx from 'bem-classnames';

const classes = {
    name: 'Toolbar__collapse',
    modifiers: []
};
const Toolbar__collapse = ({children, className, ...props}) => (
    <div
        className={cx(classes, props, className)}
    >
        {children}
    </div>
);
Toolbar__collapse.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.element,
        PropTypes.array
    ]),
    className: PropTypes.string
};
export default Toolbar__collapse;