import React from 'react';
import PropTypes from 'prop-types';
import cx from 'bem-classnames';

const classes = {
    name: 'ItemImagen'
};
const ItemImagen = ({className, src, ...props}) => (
    <img
        className={cx(classes, props, className)}
        src={src}
    />
);
ItemImagen.propTypes = {
    className: PropTypes.string,
    src: PropTypes.string
};
export default ItemImagen;