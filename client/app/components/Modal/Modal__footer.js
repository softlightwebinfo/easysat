import React, {Component} from 'react';
import PropTypes from 'prop-types';
import cx from 'bem-classnames';
import c from 'classnames';

class Modal__footer extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render() {
        const classes = {
            name: 'Modal__footer',
            modifiers: []
        };
        return (
            <footer
                className={cx(classes, this.props, this.props.className)}
            >
                {this.props.children}
            </footer>
        );
    }
}

Modal__footer.propTypes = {
    children: PropTypes.element
};
export default Modal__footer;