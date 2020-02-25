import React from 'react';
import PropTypes from 'prop-types';
import cx from 'bem-classnames';

const classes = {
    name: 'Table__tbody',
    modifiers: []
};
const Table__tbody = ({children, className, style, ...props}) => (
    <tbody className={cx(classes, props, className)} style={style}>
    {children}
    </tbody>
);
Table__tbody.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.element,
        PropTypes.array
    ]),
    style: PropTypes.object,
    className: PropTypes.string
}
Table__tbody.defaultProps = {};
export default Table__tbody;