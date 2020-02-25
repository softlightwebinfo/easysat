import React, {Component} from 'react'
import PropTypes from 'prop-types';
import cx from 'bem-classnames';
import Container from "../../components/Grid/Container";
import Texto from "../../components/Texto/Texto";
import Page__title from "../../components/Page/Page__title";
import Table from "../../components/Table/Table";
import Table__thead from "../../components/Table/Table__thead";
import Table__tbody from "../../components/Table/Table__tbody";
import Table__row from "../../components/Table/Table__row";
import Table__col from "../../components/Table/Table__col";
import Card from "../../components/Card/Card";
import Card__body from "../../components/Card/Card__body";
import Url from "../../components/Url/Url";
import Btn from "../../components/Btn/Btn";
import Icon from "../../components/Icon/Icon";
import Group from "../../components/Group/Group";
import {inject, observer} from "mobx-react";
import Api from "../../services/Api";
import ModalDelete from "./layouts/ModalDelete";
import ModalDeleteUsuarios from "../../containers/ModalDeleteUsuarios";
// import {observable} from 'mobx';
const classes = {
    name: 'ModuleUsuarios'
};

@inject('store') @observer
class ModuleUsuarios extends Component {
    static title = 'Usuarios';
    static descripcion = `Descripcion de la pagina web principal`;

    constructor(props) {
        super(props);
        this.state = {
            delete: null
        };
    }

    static async getInitialProps(ctx) {
        await ctx.mobxStore.Usuarios.getAll();
    }

    modal() {
        if (this.state.delete === null) return null;
        return (
            <ModalDeleteUsuarios
                show={this.state.delete !== null}
                item={this.state.delete}
                onClose={() => {
                    this.setState({delete: null});
                }}
            />
        );
    }

    rows() {
        return this.props.store.Usuarios.usuarios.map((item, i) => {
            return (
                <Table__row key={'' + item._id}>
                    <Table__col><Icon style={{color: 'black'}} icon="lnr lnr-user"/>{item._nombre}</Table__col>
                    <Table__col><Icon style={{color: 'black'}} icon="lnr lnr-envelope"/>{item._email}</Table__col>
                    <Table__col><Icon style={{color: 'black'}} icon="lnr lnr-phone-handset"/>{item.firstTelefono}</Table__col>
                    <Table__col><Icon style={{color: 'black'}} icon="lnr lnr-layers"/>{item._fk_role}</Table__col>
                    <Table__col><Icon style={{color: 'black'}} icon="lnr lnr-calendar-full"/>{item.fechaCreacion}</Table__col>
                    <Table__col>
                        <Group>
                            <Url route={'usuariosActualizar'} params={{id: '' + item._id}}><Btn outline type={'primary'} icon><Icon icon={'lnr lnr-pencil'}/></Btn></Url>
                            <Btn onClick={e => this.setState({delete: item})} outline type={'primary'} icon><Icon icon={'lnr lnr-trash'}/></Btn>
                        </Group>
                    </Table__col>
                </Table__row>
            )
        })
    }

    render() {
        return (
            <Container>
                <Page__title separate>
                    <span>Listado Usuarios</span>
                    <Url route="usuariosRegistro">
                        <Btn outline type={'primary'}>Registrar usuario</Btn>
                    </Url>
                </Page__title>
                <Card default>
                    <Card__body>
                        <Table>
                            <Table__thead>
                                <Table__row>
                                    <Table__col>Nombre</Table__col>
                                    <Table__col>Email</Table__col>
                                    <Table__col style={{width: 56}}>Telefono</Table__col>
                                    <Table__col style={{width: 56}}>Role</Table__col>
                                    <Table__col style={{width: 56}}>Fecha</Table__col>
                                    <Table__col style={{width: 100}}>Conf.</Table__col>
                                </Table__row>
                            </Table__thead>
                            <Table__tbody>
                                {this.rows()}
                            </Table__tbody>
                        </Table>
                    </Card__body>
                </Card>
                {this.modal()}
            </Container>
        );
    }
}

export default ModuleUsuarios;