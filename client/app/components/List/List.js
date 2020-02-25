import React from 'react';
import PropTypes from 'prop-types';
import cx from 'bem-classnames';

const classes = {
    name: 'List'
}
const List = ({Component: Tag, className, children, ...props}) => (
    <div className={cx(classes, props, className)}>
        {children}
    </div>
);
List.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.element,
        PropTypes.array
    ]),
    Component: PropTypes.string
};
List.defaultProps = {
    Tag: 'ul'
}
export default List;