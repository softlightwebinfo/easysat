import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import cx from 'bem-classnames';

const classes = {
    name: 'Toolbar__button',
    modifiers: [
        'desktop',
        'mobile'
    ]
};
const Toolbar__button = ({className, children, ...props}) => (
    <button className={cx(classes, props, className)}>
        {children}
    </button>
);
Toolbar__button.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.element,
        PropTypes.array
    ]),
    className: PropTypes.string
}
export default Toolbar__button;