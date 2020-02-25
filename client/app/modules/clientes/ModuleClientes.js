import React, {Component} from 'react'
import PropTypes from 'prop-types';
import cx from 'bem-classnames';
import Container from "../../components/Grid/Container";
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
import {inject, observer} from 'mobx-react';
import ModalDeleteClientes from "../../containers/ModalDeleteClientes";

const classes = {
    name: 'ModuleClientes'
};

@inject('store')
@observer
class ModuleClientes extends Component {
    static title = 'Clientes';
    static descripcion = `Descripcion de la pagina web principal`;

    constructor(props) {
        super(props);
        this.state = {
            delete: null
        };
    }

    static async getInitialProps(ctx) {
        await ctx.mobxStore.Clientes.getAll();
    }

    modal() {
        if (this.state.delete === null) return null;
        return (
            <ModalDeleteClientes
                show={this.state.delete !== null}
                item={this.state.delete}
                onClose={() => {
                    this.setState({delete: null});
                }}
            />
        );
    }

    rows() {
        return this.props.store.Clientes.clientes.map((item, i) => {
            return (
                <Table__row key={item._id}>
                    <Table__col><Icon style={{color: 'black'}} icon="lnr lnr-user"/>{item._nombre}</Table__col>
                    <Table__col><Icon style={{color: 'black'}} icon="lnr lnr-phone-handset"/>{item.firstTelefono}</Table__col>
                    <Table__col><Icon style={{color: 'black'}} icon="lnr lnr-calendar-full"/>{item.fechaCreacion}</Table__col>
                    <Table__col>
                        <Group>
                            <Url route={'clientesActualizar'} params={{id: '' + item._id}}><Btn outline type={'primary'} icon><Icon icon={'lnr lnr-pencil'}/></Btn></Url>
                            <Btn onClick={() => this.setState({delete: item})} outline type={'primary'} icon><Icon icon={'lnr lnr-trash'}/></Btn>
                            <Url route={'clientesDetalle'} params={{id: '' + item._id}}><Btn outline type={'primary'} icon><Icon icon={'lnr lnr-eye'}/></Btn></Url>
                        </Group>
                    </Table__col>
                </Table__row>
            )
        });
    }

    render() {
        return (
            <Container>
                <Page__title separate>
                    <span>Listado clientes</span>
                    <Url route="clientesRegistro">
                        <Btn outline type={'primary'}>Registrar cliente</Btn>
                    </Url>
                </Page__title>
                <Card default>
                    <Card__body>
                        <Table>
                            <Table__thead>
                                <Table__row>
                                    <Table__col Tag={"th"}>Nombre</Table__col>
                                    <Table__col Tag={"th"} style={{width: 56}}>Telefono</Table__col>
                                    <Table__col Tag={"th"} style={{width: 56}}>Fecha</Table__col>
                                    <Table__col Tag={"th"} style={{width: 100}}>Conf.</Table__col>
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

export default ModuleClientes;