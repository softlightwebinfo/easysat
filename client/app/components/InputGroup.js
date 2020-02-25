import React from 'react';
import cx from 'bem-classnames';
import PropTypes from 'prop-types';
const classes = {
    name: 'InputGroup',
    modifiers: []
};
const InputGroup = (
    {
        className,
        children,
        ...props
    }
) => (
    <div className={cx(classes, props, className)}>
        {children}
    </div>
);

InputGroup.propTypes = {
    className: PropTypes.string,
    children: PropTypes.oneOfType([
        PropTypes.array,
        PropTypes.element
    ])
};
InputGroup.defaultProps = {};
export default InputGroup;