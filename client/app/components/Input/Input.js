import React, {PureComponent} from 'react';
import cx from 'bem-classnames';
import PropTypes from 'prop-types';
import c from 'classnames';

const classes = {
    name: 'Input',
    modifiers: []
};
const Input = (
    {
        type,
        step,
        name,
        style,
        placeholder,
        className,
        onChange,
        value,
        required,
        color,
        ...props
    }
) => (
    <input
        name={name}
        placeholder={placeholder}
        className={cx(classes, props, className, c({
            [`${classes.name}--color-${color}`]: color
        }))}
        step={step}
        type={type}
        style={style}
        onChange={onChange}
        required={required}
        value={value}
        autoComplete={"off"}
    />
);

Input.propTypes = {
    type: PropTypes.string,
    style: PropTypes.object,
    placeholder: PropTypes.string,
    value: PropTypes.string,
    className: PropTypes.string,
    color: PropTypes.string,
    name: PropTypes.string,
    step: PropTypes.string,
    onChange: PropTypes.func,
    required: PropTypes.bool,
};
Input.defaultProps = {
    type: 'text',
};
export default Input;