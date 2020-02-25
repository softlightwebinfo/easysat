import React from 'react';
import PropTypes from 'prop-types';
import cx from 'bem-classnames';
import {Link} from '../../../routes';

const classes = {
    name: 'Url'
};
const Url = ({route, style, children, params, className, ...props}) => (
    <Link
        route={route}
        params={params}
    >
        <a
            style={style}
            className={cx(classes, props, className)}
        >
            {children}
        </a>
    </Link>
);
Url.propTypes = {
    route: PropTypes.string,
    style: PropTypes.object,
    params: PropTypes.object,
    className: PropTypes.string,
    children: PropTypes.oneOfType([
        PropTypes.element,
        PropTypes.array
    ])
};
export default Url;