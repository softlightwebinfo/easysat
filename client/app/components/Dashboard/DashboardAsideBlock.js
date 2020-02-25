import React, {Component} from 'react';
import PropTypes from 'prop-types';
import cx from 'bem-classnames';

class DashboardAsideBlock extends Component {
    render() {
        const classes = {
            name: 'Dashboard-aside-block',
            modifiers: []
        };
        return (
            <ul className={cx(classes, this.props, this.props.className)}>
                {this.props.children}
            </ul>
        );
    }
}

DashboardAsideBlock.propTypes = {
    className: PropTypes.string,
    children: PropTypes.oneOfType([
        PropTypes.element,
        PropTypes.array
    ])
};
export default DashboardAsideBlock;