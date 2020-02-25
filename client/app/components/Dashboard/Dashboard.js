import React, {Component} from 'react';
import PropTypes from 'prop-types';
import cx from 'bem-classnames';

class Dashboard extends Component {
    render() {
        const classes = {
            name: 'Dashboard',
            modifiers: []
        };
        return (
            <main className={cx(classes, this.props, this.props.className)}>
                {this.props.children}
            </main>
        );
    }
}

Dashboard.propTypes = {
    className: PropTypes.string,
    children: PropTypes.oneOfType([
        PropTypes.element,
        PropTypes.array
    ])
};
export default Dashboard;