import React from 'react';
import PropTypes from 'prop-types';
import cx from 'bem-classnames';

const classes = {
    name: 'Form',
    modifiers: []
};
const Form = ({children, method, action, onSubmit, className, style, ...props}) => (
    <form method={method} action={action} onSubmit={onSubmit} className={cx(classes, props, className)} style={style}>
        {children}
    </form>
);
Form.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.element,
        PropTypes.array
    ]),
    style: PropTypes.object,
    className: PropTypes.string,
    action: PropTypes.string,
    method: PropTypes.string,
    onSubmit: PropTypes.func
};
Form.defaultProps = {
    method: 'POST',
    onSubmit: () => {
    }
};
export default Form;