import React from 'react';
import PropTypes from 'prop-types';
import cx from 'bem-classnames';

const classes = {
    name: 'Table'
};
const Table = ({children, className, style, ...props}) => (
    <div className={classes.name + '-responsive'}>
        <table className={cx(classes, props, className)}>
            {children}
        </table>
    </div>
);
Table.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.element,
        PropTypes.array
    ]),
    className: PropTypes.string,
    style: PropTypes.object
};

export default Table;