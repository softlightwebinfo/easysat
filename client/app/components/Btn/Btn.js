import React from 'react';
import cx from 'bem-classnames';
import PropTypes from 'prop-types';
import c from 'classnames';

const classes = {
    name: 'Btn',
    modifiers: [
        'outline',
        'icon'
    ]
};
const Btn = ({btnType, onClick, Tag, value, children, className, type, ...props}) => (
    <Tag
        onClick={onClick}
        className={cx(classes, props, className, c({
            [`${classes.name}--${type}`]: type
        }))}
        type={btnType}
    >
        {value}
        {children}
    </Tag>
);
Btn.propTypes = {
    Tag: PropTypes.string,
    btnType: PropTypes.string,
    type: PropTypes.string,
    value: PropTypes.string,
    outline: PropTypes.bool,
    icon: PropTypes.bool,
    onClick: PropTypes.func
};
Btn.defaultProps = {
    Tag: 'button',
    btnType: 'button',
    onClick: () => {
    }
};
export default Btn;