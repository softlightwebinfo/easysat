import React from 'react';
import PropTypes from 'prop-types';
import cx from 'bem-classnames';

const classes = {
    name: 'Group',
    modifiers: []
};
const Group = ({children, className, style, ...props}) => (
    <div className={cx(classes, props, className)} style={style}>
        {children}
    </div>
);
Group.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.element,
        PropTypes.array
    ]),
    style: PropTypes.object,
    className: PropTypes.string
}
Group.defaultProps = {};
export default Group;