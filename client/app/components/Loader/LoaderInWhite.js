import React from 'react';
import PropTypes from 'prop-types';
import cx from 'bem-classnames';
import Loader from "./Loader";

const classes = {
    name: 'LoaderInWhite',
    modifiers: []
}
const LoaderInWhite = ({children, className, ...props}) => (
    <Loader className={cx(classes, props, className)} style={{
        stroke: '#c7c3c3',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        margin: 'auto'
    }}/>
);
LoaderInWhite.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.element,
        PropTypes.array
    ]),
    style: PropTypes.object,
    className: PropTypes.string
}
LoaderInWhite.defaultProps = {};
export default LoaderInWhite;