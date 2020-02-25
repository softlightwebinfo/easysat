import React, {Component} from 'react';
import PropTypes from 'prop-types';
import cx from 'bem-classnames';

class DashboardBody extends Component {
    render() {
        const classes = {
            name: 'Dashboard-body',
            modifiers: []
        };
        return (
            <section className={cx(classes, this.props, this.props.className)}>
                {this.props.children}
            </section>
        );
    }
}

DashboardBody.propTypes = {
    className: PropTypes.string,
    children: PropTypes.oneOfType([
        PropTypes.element,
        PropTypes.array
    ])
};
export default DashboardBody;