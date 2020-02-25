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
import {inject, observer} from 'mobx-react';
import ModalDelete from "../usuarios/layouts/ModalDelete";
import ModalDeleteProductos from "../../containers/ModalDeleteProductos";

const classes = {
    name: 'ModuleProductos'
};

@inject('store')
@observer
class ModuleProductos extends Component {
    static title = 'Productos';
    static descripcion = `Descripcion de la pagina web principal`;

    constructor(props) {
        super(props);
        this.state = {
            delete: null
        };
    }

    static async getInitialProps(ctx) {
        await ctx.mobxStore.Productos.getAll();
    }

    modal() {
        if (this.state.delete === null) return null;
        return (
            <ModalDeleteProductos
                show={this.state.delete !== null}
                item={this.state.delete}
                onClose={() => {
                    this.setState({delete: null});
                }}
            />
        );
    }

    rows() {
        return this.props.store.Productos.productos.map(item => {
            return (
                <Table__row key={item._id}>
                    <Table__col>{item._referencia}</Table__col>
                    <Table__col>{item._nombre}</Table__col>
                    <Table__col>{item._fk_categoria}</Table__col>
                    <Table__col>{item._precio} €</Table__col>
                    <Table__col>
                        <Group>
                            <Url route={'productosActualizar'} params={{id: item._id}}><Btn outline type={'primary'} icon><Icon icon={'lnr lnr-pencil'}/></Btn></Url>
                            <Btn onClick={e => this.setState({delete: item})} outline type={'primary'} icon><Icon icon={'lnr lnr-trash'}/></Btn>
                        </Group>
                    </Table__col>
                </Table__row>
            )
        });
        return rows;
    }

    render() {
        return (
            <Container>
                <Page__title separate>
                    <span>Listado Productos</span>
                    <Url route="productosRegistro">
                        <Btn outline type={'primary'}>Registrar producto</Btn>
                    </Url>
                </Page__title>
                <Card default>
                    <Card__body>
                        <Table>
                            <Table__thead>
                                <Table__row>
                                    <Table__col>Ref.</Table__col>
                                    <Table__col>Producto</Table__col>
                                    <Table__col>Categoría</Table__col>
                                    <Table__col>Precio</Table__col>
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

export default ModuleProductos;