import React from 'react';
import PropTypes from 'prop-types';
import cx from 'bem-classnames';

const classes = {
    name: 'Or'
};
const Or = ({mensaje, className, ...props}) => (
    <div className={cx(classes, props, className)}>
        <p className={classes.name + '__mensaje'}>
            {mensaje}
        </p>
    </div>
);
Or.propTypes = {
    mensaje: PropTypes.string.isRequired,
    className: PropTypes.string
};
Or.defaultProps = {};
export default Or;