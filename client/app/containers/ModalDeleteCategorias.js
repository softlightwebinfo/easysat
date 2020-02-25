import React, {Component} from 'react';
import PropTypes from 'prop-types';
import ModalDelete from "../modules/usuarios/layouts/ModalDelete";
import {observer, inject} from 'mobx-react';

@inject('store')
@observer
class ModalDeleteCategorias extends Component {
    constructor(props) {
        super(props);
    }

    async onEliminar(e) {
        let isDelete = await this.props.item.eliminarCategoria();
        let success = this.props.store.Categorias.deleteCategoria(this.props.item._id);
        if (success) {
            this.props.onClose();
        }
    }

    render() {
        return (
            <ModalDelete
                onEliminar={this.onEliminar.bind(this)}
                show={this.props.show !== null}
                onClose={this.props.onClose}
            />
        );
    }
}

ModalDeleteCategorias.propTypes = {
    onClose: PropTypes.func.isRequired,
    show: PropTypes.bool.isRequired,
    item: PropTypes.object
};
export default ModalDeleteCategorias;