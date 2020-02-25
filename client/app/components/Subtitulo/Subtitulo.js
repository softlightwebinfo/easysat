import React from 'react';
import PropTypes from 'prop-types';
import cx from 'bem-classnames';

const classes = {
    name: 'Subtitulo'
};
const Subtitulo = ({className, children, mensaje, ...props}) => {

    return (
        <h2
            className={cx(classes, props, className)}
        >
            {mensaje}
            {children}
        </h2>
    );
};
Subtitulo.propTypes = {
    className: PropTypes.string,
    children: PropTypes.oneOfType([
        PropTypes.element,
        PropTypes.array
    ]),
    mensaje: PropTypes.string
};
export default Subtitulo;