import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import cx from 'bem-classnames';

const classes = {
    name: 'Toolbar__right',
    modifiers: []
};
const Toolbar__right = ({className, style, children, ...props}) => (
    <section style={style} className={cx(classes, props, className)}>
        {children}
    </section>
);
Toolbar__right.propTypes = {
    className: PropTypes.string,
    children: PropTypes.oneOfType([
        PropTypes.element,
        PropTypes.array
    ]),
    style: PropTypes.object
};
export default Toolbar__right;