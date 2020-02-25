import React from 'react';
import PropTypes from 'prop-types';
import cx from 'bem-classnames';

const classes = {
    name: 'Error',
    modifiers: []
}
const Error = ({mensaje, className, style, ...props}) => (
    <div className={cx(classes, props, className)} style={style}>
        {mensaje}
    </div>
);
Error.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.element,
        PropTypes.array
    ]),
    style: PropTypes.object,
    className: PropTypes.string
}
Error.defaultProps = {};
export default Error;