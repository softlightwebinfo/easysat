import React from 'react';
import PropTypes from 'prop-types';
import cx from 'bem-classnames';

const classes = {
    name: 'ListItem',
    modifiers: ['active']
};

const ListItem = ({onClick, children, className, ...props}) => (
    <div onClick={onClick} className={cx(classes, props, className)}>
        {children}
    </div>
);
ListItem.defaultProps = {
    onClick: () => {

    }
};
ListItem.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.element,
        PropTypes.array
    ]),
    className: PropTypes.string,
    active: PropTypes.bool,
    onClick: PropTypes.func
}
export default ListItem;