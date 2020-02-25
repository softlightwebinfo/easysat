import React from 'react';
import cx from 'bem-classnames';

const classes = {
    name: 'FormGroup',
    modifiers: []
};
const FormGroup = ({children, className, ...props}) => (
    <div className={cx(classes, props, className)}>
        {children}
    </div>
);
FormGroup.propTypes = {};
FormGroup.defaultProps = {};

export default FormGroup;