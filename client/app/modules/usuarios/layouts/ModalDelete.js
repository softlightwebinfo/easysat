import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Modal from "../../../components/Modal/Modal";
import Modal__dialog from "../../../components/Modal/Modal__dialog";
import Modal__body from "../../../components/Modal/Modal__body";
import Titulo from "../../../components/Titulo/Titulo";
import Texto from "../../../components/Texto/Texto";
import Btn from "../../../components/Btn/Btn";
import Buttons from "../../../components/Buttons/Buttons";

class ModalDelete extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <Modal
                show={this.props.show}
                onClose={this.props.onClose}
            >
                <Modal__dialog>
                    <Modal__body>
                        <Titulo extend mensaje={"Quieres eliminarlo?"}/>
                        <Texto>Se eliminará definitivamente de la base de datos</Texto>
                        <Buttons center style={{
                            marginTop: 10
                        }}>
                            <Btn
                                icon
                                outline
                                type="primary"
                                value="Eliminar"
                                onClick={() => this.props.onEliminar()}
                            />
                        </Buttons>
                    </Modal__body>
                </Modal__dialog>
            </Modal>
        );
    }
}

ModalDelete.propTypes = {
    children: PropTypes.element,
    onClose: PropTypes.func,
    onEliminar: PropTypes.func.isRequired,
    show: PropTypes.bool.isRequired
};
export default ModalDelete;