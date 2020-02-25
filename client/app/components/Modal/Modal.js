import React, {Component} from 'react';
import PropTypes from 'prop-types';
import cx from 'bem-classnames';
import c from 'classnames';

class Modal extends Component {
    constructor(props) {
        super(props);
        this.state = {};
        this.setWrapperRef = this.setWrapperRef.bind(this);
        this.handleClickOutside = this.handleClickOutside.bind(this);
    }

    componentDidMount() {
        document.addEventListener('mousedown', this.handleClickOutside);
    }

    componentWillUnmount() {
        document.removeEventListener('mousedown', this.handleClickOutside);
    }

    handleClickOutside(event) {
        if (this.wrapperRef && !(this.wrapperRef != event.target)) {
            this.props.onClose();
            // this.setState({show: false});
        }
    }

    setWrapperRef(node) {
        this.wrapperRef = node;
    }

    render() {
        const classes = {
            name: 'Modal',
            modifiers: []
        };
        return (
            <div
                ref={this.setWrapperRef}
                className={cx(classes, this.props, this.props.className)}
            >
                {this.props.children}
            </div>
        );
    }
}

Modal.propTypes = {
    children: PropTypes.element.isRequired,
    onClose: PropTypes.func,
    show: PropTypes.bool
};
export default Modal;