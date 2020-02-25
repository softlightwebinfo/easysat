import React, {Component} from 'react';
import PropTypes from 'prop-types';
import cx from 'bem-classnames';

class DashboardLayout extends Component {
    render() {
        const classes = {
            name: 'Dashboard-layout',
            modifiers: []
        };
        return (
            <section className={cx(classes, this.props, this.props.className)}>
                {this.props.children}
            </section>
        );
    }
}

DashboardLayout.propTypes = {
    className: PropTypes.string,
    children: PropTypes.oneOfType([
        PropTypes.element,
        PropTypes.array
    ])
};
export default DashboardLayout;