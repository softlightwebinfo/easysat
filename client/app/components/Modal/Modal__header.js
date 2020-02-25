import React, {Component} from 'react';
import PropTypes from 'prop-types';
import cx from 'bem-classnames';
import c from 'classnames';

class Modal__header extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render() {
        const classes = {
            name: 'Modal__header',
            modifiers: []
        };
        return (
            <header
                className={cx(classes, this.props, this.props.className)}
            >
                {this.props.children}
            </header>
        );
    }
}

Modal__header.propTypes = {
    children: PropTypes.element
};
export default Modal__header;