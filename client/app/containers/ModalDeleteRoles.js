import React, {Component} from 'react';
import PropTypes from 'prop-types';
import ModalDelete from "../modules/usuarios/layouts/ModalDelete";
import {observer, inject} from 'mobx-react';

@inject('store')
@observer
class ModalDeleteRoles extends Component {
    constructor(props) {
        super(props);
    }

    async onEliminar(e) {
        let isDelete = await this.props.item.eliminarRole();
        let success = this.props.store.Roles.deleteRole(this.props.item._role);
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

ModalDeleteRoles.propTypes = {
    onClose: PropTypes.func.isRequired,
    show: PropTypes.bool.isRequired,
    item: PropTypes.object
};
export default ModalDeleteRoles;