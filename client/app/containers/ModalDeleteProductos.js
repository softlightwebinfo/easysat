import React, {Component} from 'react';
import PropTypes from 'prop-types';
import ModalDelete from "../modules/usuarios/layouts/ModalDelete";
import {observer, inject} from 'mobx-react';

@inject('store')
@observer
class ModalDeleteProductos extends Component {
    constructor(props) {
        super(props);
    }

    async onEliminar(e) {
        let isDelete = await this.props.item.eliminarProducto();
        let success = this.props.store.Productos.deleteProducto(this.props.item._id);
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

ModalDeleteProductos.propTypes = {
    onClose: PropTypes.func.isRequired,
    show: PropTypes.bool.isRequired,
    item: PropTypes.object
};
export default ModalDeleteProductos;