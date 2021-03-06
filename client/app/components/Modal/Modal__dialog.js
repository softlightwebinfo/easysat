import React, {Component} from 'react';
import PropTypes from 'prop-types';
import cx from 'bem-classnames';
import c from 'classnames';

class Modal__dialog extends Component {
    constructor(props) {
        super(props);
        this.state = {
            show: props.show || false
        }
    }

    render() {
        const classes = {
            name: 'Modal__dialog',
            modifiers: []
        };
        return (
            <div
                className={cx(classes, this.props, this.props.className)}
            >
                {this.props.children}
            </div>
        );
    }
}

Modal__dialog.propTypes = {
    children: PropTypes.element
};
export default Modal__dialog;