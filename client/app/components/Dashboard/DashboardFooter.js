import React, {Component} from 'react';
import PropTypes from 'prop-types';
import cx from 'bem-classnames';

class DashboardFooter extends Component {
    render() {
        const classes = {
            name: 'Dashboard-footer',
            modifiers: []
        };
        return (
            <footer className={cx(classes, this.props, this.props.className)}>
                {this.props.children}
            </footer>
        );
    }
}

DashboardFooter.propTypes = {
    className: PropTypes.string,
    children: PropTypes.oneOfType([
        PropTypes.element,
        PropTypes.array
    ])
};
export default DashboardFooter;