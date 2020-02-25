import React from 'react';
import cx from 'bem-classnames';
import PropTypes from 'prop-types';
const classes = {
    name: 'TituloGrupo'
};
const TituloGrupo = ({children, titulo, subtitulo, className, style, ...props}) => (
    <div className={cx(classes, props, className)}>
        <div className={classes.name + '__titulo'}>{titulo}</div>
        <div className={classes.name + '__subtitulo'}>{subtitulo}</div>
        {children}
    </div>
);
TituloGrupo.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.element,
        PropTypes.array,
    ]),
    titulo: PropTypes.string.isRequired,
    subtitulo: PropTypes.string.isRequired,
    className: PropTypes.string,
    style: PropTypes.object
};
export default TituloGrupo;