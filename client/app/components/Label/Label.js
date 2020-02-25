import React from 'react';
import cx from 'bem-classnames';
import PropTypes from 'prop-types';

const classes = {
    name: 'Label',
    modifiers: []
};
const Label = ({children, text, className, ...props}) => (
    <label className={cx(classes, props, className)}>
        {text}
        {children}
    </label>
);
Label.propTypes = {
    text: PropTypes.string,
    className: PropTypes.string,
    children: PropTypes.oneOfType([
        PropTypes.array,
        PropTypes.element,
        PropTypes.string,
    ])
};
Label.defaultProps = {};
export default Label;