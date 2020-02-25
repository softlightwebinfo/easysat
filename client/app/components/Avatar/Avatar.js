import React from 'react';
import PropTypes from 'prop-types';
import cx from 'bem-classnames';

const classes = {
    name: 'Avatar',
    modifiers: [
        'grande'
    ]
};
const Avatar = ({src, style, title, className, ...props}) => (
    <div
        style={style}
        className={cx(classes, props, className)}
    >
        <img
            className={classes.name + '__image'}
            src={src}
            alt={title}
            title={title}
        />
    </div>
);
Avatar.propTypes = {
    src: PropTypes.string,
    className: PropTypes.string,
    title: PropTypes.string,
    style: PropTypes.object,
    grande: PropTypes.bool
};
export default Avatar;