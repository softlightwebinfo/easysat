import React, {Component} from 'react';
import PropTypes from 'prop-types';
import cx from 'bem-classnames';

class DashboardAside extends Component {
    render() {
        const classes = {
            name: 'Dashboard-aside',
            modifiers: []
        };
        return (
            <aside className={cx(classes, this.props, this.props.className)}>
                {this.props.children}
            </aside>
        );
    }
}

DashboardAside.propTypes = {
    className: PropTypes.string,
    children: PropTypes.oneOfType([
        PropTypes.element,
        PropTypes.array
    ])
};
export default DashboardAside;