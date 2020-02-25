import React from 'react';
import PropTypes from 'prop-types';
import cx from 'bem-classnames';

const classes = {
    name: 'Table__thead',
    modifiers: []
};
const Table__thead = ({children, className, style, ...props}) => (
    <thead className={cx(classes, props, className)} style={style}>
        {children}
    </thead>
);
Table__thead.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.element,
        PropTypes.array
    ]),
    style: PropTypes.object,
    className: PropTypes.string
};
Table__thead.defaultProps = {};
export default Table__thead;