import React from 'react';
import PropTypes from 'prop-types';
import cx from 'bem-classnames';
const classes={
    name:'Table__row',
    modifiers:[

    ]
}
const Table__row =({children,className,style,...props})=>(
    <tr className={cx(classes,props,className)} style={style}>
        {children}
    </tr>
);
Table__row.propTypes={
    children:PropTypes.oneOfType([
        PropTypes.element,
        PropTypes.array
    ]),
    style:PropTypes.object,
    className:PropTypes.string
}
Table__row.defaultProps={};
export default Table__row;