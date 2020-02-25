import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import cx from 'bem-classnames';

const classes = {
    name: 'Toolbar',
    modifiers: []
};
const Toolbar = ({className, children, ...props}) => (
    <div className={cx(classes, props, className)}>
        <div className={classes.name + '__wrapper'}>
            {children}
        </div>
    </div>
);
Toolbar.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.element,
        PropTypes.array
    ]),
    className: PropTypes.string
}
export default Toolbar;