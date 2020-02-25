import React, {Component} from 'react';
import PropTypes from 'prop-types';
import cx from 'bem-classnames';
import c from 'classnames';

class Modal__body extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        const classes = {
            name: 'Modal__body',
            modifiers: []
        };
        return (
            <section
                className={cx(classes, this.props, this.props.className)}
            >
                {this.props.children}
            </section>
        );
    }
}

Modal__body.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.element,
        PropTypes.array,
    ])
};
export default Modal__body;