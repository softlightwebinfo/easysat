import React from 'react';
import PropTypes from 'prop-types';
import cx from 'bem-classnames';

const classes = {
    name: 'Icon'
};
const Icon = ({icon, className, style, ...props}) => (
    <span
        style={style}
        className={cx(classes, props, className, icon)}
    >

    </span>
);
Icon.propTypes = {
    icon: PropTypes.string,
    className: PropTypes.string,
    style: PropTypes.object
};
export default Icon;