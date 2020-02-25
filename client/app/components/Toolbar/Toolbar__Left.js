import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import cx from 'bem-classnames';

const classes = {
    name: 'Toolbar__left',
    modifiers: []
};
const Toolbar__left = ({className, children, ...props}) => (
    <section className={cx(classes, props, className)}>
        {children}
    </section>
);
Toolbar__left.propTypes = {
    className: PropTypes.string,
    children: PropTypes.oneOfType([
        PropTypes.element,
        PropTypes.array
    ]),
};
export default Toolbar__left;