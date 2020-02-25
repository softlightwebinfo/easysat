import React from 'react';
import PropTypes from 'prop-types';

const Wrapper = ({children}) => (
    <div className={'Wrapper'}>
        {children}
    </div>
);
Wrapper.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.element,
        PropTypes.array,
    ])
};
export default Wrapper;