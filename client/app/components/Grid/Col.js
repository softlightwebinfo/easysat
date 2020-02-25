import React from 'react';
import PropTypes from 'prop-types';
import cs from 'bem-classnames';
import c from 'classnames';

const classes = {
    name: 'col'
};
const Col = ({className, style, sm, xl, md, lg, children, ...props}) => (
    <div style={style} className={cs(classes, props, className, c({
        [`${classes.name}-sm-${md}`]: sm,
        [`${classes.name}-md-${md}`]: md,
        [`${classes.name}-lg-${lg}`]: lg,
        [`${classes.name}-xl-${xl}`]: xl
    }))}>
        {children}
    </div>
);
Col.propTypes = {
    sm: PropTypes.number,
    md: PropTypes.number,
    lg: PropTypes.number,
    xl: PropTypes.number,
    style: PropTypes.object
};
export default Col;