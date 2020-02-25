import React from 'react';
import PropTypes from 'prop-types';
import cx from 'bem-classnames';
import c from 'classnames';

const classes = {
    name: 'Etiqueta',
    modifiers: []
};
const Etiqueta = ({children, mensaje, type, className, style, ...props}) => (
    <div className={cx(classes, props, className, c({
        [`${classes.name}--${type}`]: type
    }))} style={style}>
        {mensaje}
    </div>
);
Etiqueta.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.element,
        PropTypes.array
    ]),
    mensaje: PropTypes.string,
    style: PropTypes.object,
    className: PropTypes.string,
    type: PropTypes.string
}
Etiqueta.defaultProps = {};
export default Etiqueta;