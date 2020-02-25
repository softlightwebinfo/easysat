import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import cx from 'bem-classnames';

const classes = {
    name: 'Toolbar__logo',
    modifiers: [
        'desktop',
        'mobile'
    ]
};
const Toolbar__logo = ({className, children, ...props}) => (
    <div className={cx(classes, props, className)}>
        {children}
    </div>
);
Toolbar__logo.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.element,
        PropTypes.array
    ]),
    className: PropTypes.string
}
export default Toolbar__logo;