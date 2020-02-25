import React from 'react';
import PropTypes from 'prop-types';
import cx from 'bem-classnames';

const classes = {
    name: 'Table__col',
    modifiers: []
}
const Table__col = ({Tag, children, className, style, ...props}) => (
    <Tag className={cx(classes, props, className)} style={style}>
        {children}
    </Tag>
);
Table__col.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.element,
        PropTypes.number,
        PropTypes.array,
        PropTypes.string,
    ]),
    style: PropTypes.object,
    className: PropTypes.string,
    Tag: PropTypes.string
}
Table__col.defaultProps = {
    Tag: 'td'
};
export default Table__col;