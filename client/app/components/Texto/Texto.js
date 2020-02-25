import React from 'react';
import PropTypes from 'prop-types';
import cx from 'bem-classnames';

const classes = {
    name: 'Texto'
};
const Texto = ({Tag, children, className, style, ...props}) => (
    <Tag
        className={cx(classes, props, className)}
        style={style}
    >
        {children}
    </Tag>
);
Texto.defaultProps = {
    Tag: 'p'
};
Texto.propTypes = {
    className: PropTypes.string,
    Tag: PropTypes.string,
    children: PropTypes.string,
    style: PropTypes.object
};
export default Texto;