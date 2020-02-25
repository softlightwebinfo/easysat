import React, {Component} from 'react';
import PropTypes from 'prop-types';
import cx from 'bem-classnames';

class DashboardHeader extends Component {
    render() {
        const classes = {
            name: 'Dashboard-header',
            modifiers: []
        };
        return (
            <header className={cx(classes, this.props, this.props.className)}>
                {this.props.children}
            </header>
        );
    }
}

DashboardHeader.propTypes = {
    className: PropTypes.string,
    children: PropTypes.oneOfType([
        PropTypes.element,
        PropTypes.array
    ])
};
export default DashboardHeader;