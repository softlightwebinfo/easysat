import React from 'react';
import cx from 'bem-classnames';
import PropTypes from 'prop-types';

const classes = {
    name: 'Icon'
};
const IconMenu = ({width, height, className, ...props}) => (
    <>
        <svg
            width={width}
            height={height}
            viewBox="0 0 16 14"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
        >
            <g id="Symbols" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                <g id="header" transform="translate(-20.000000, -22.000000)" fill="#B1C3C8">
                    <g id="Group-10" transform="translate(20.000000, 22.000000)">
                        <rect id="Rectangle" x="0" y="0" width="16" height="2" rx="1"></rect>
                        <rect id="Rectangle-Copy" x="0" y="6" width="16" height="2" rx="1"></rect>
                        <rect id="Rectangle-Copy-3" x="0" y="12" width="16" height="2" rx="1"></rect>
                    </g>
                </g>
            </g>
        </svg>
    </>
);
IconMenu.propTypes = {
    width: PropTypes.number,
    height: PropTypes.number
};
IconMenu.defaultProps = {
    width: 16,
    height: 16
};
export default IconMenu;