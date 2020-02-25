import React from 'react';
import PropTypes from 'prop-types';
import cx from 'bem-classnames';

const classes = {
    name: 'Page__title',
    modifiers: ['separate']
};
const Page__title = ({children, className, style, ...props}) => (
    <h2 style={style} className={cx(classes, props, className)}>
        {children}
    </h2>
);
Page__title.propTypes = {
    style: PropTypes.object,
    className: PropTypes.string,
    children: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.element,
        PropTypes.array,
    ]),
    separate: PropTypes.bool
};
export default Page__title;