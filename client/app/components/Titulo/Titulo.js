import React from 'react';
import PropTypes from 'prop-types';
import cx from 'bem-classnames';

const classes = {
    name: 'Titulo',
    modifiers: [
        'default',
        'extend'
    ]
};
const Titulo = ({classNames, children, mensaje, ...props}) => {
    const Componente = 'h1';
    return (
        <Componente
            className={cx(classes, props, classNames)}
        >
            {mensaje}
            {children}
        </Componente>
    )
};
Titulo.propTypes = {
    mensaje: PropTypes.string,
    children: PropTypes.oneOfType([
        PropTypes.element,
        PropTypes.array
    ]),
    className: PropTypes.string,
    default: PropTypes.bool,
    extend: PropTypes.bool,
};
export default Titulo;