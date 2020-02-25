import React, {Component} from 'react';
import PropTypes from 'prop-types';
import cx from 'bem-classnames';
import c from 'classnames';
import Modal from "./Modal";
import Modal__dialog from "./Modal__dialog";
import Modal__header from "./Modal__header";
import Modal__body from "./Modal__body";
import Modal__footer from "./Modal__footer";

class Index extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <Modal>
                <Modal__dialog>
                    <Modal__header/>
                    <Modal__body/>
                    <Modal__footer/>
                </Modal__dialog>
            </Modal>
        );
    }
}

Index.propTypes = {
    children: PropTypes.element,
    onClose: PropTypes.func,
    show: PropTypes.bool
};
export default Index;