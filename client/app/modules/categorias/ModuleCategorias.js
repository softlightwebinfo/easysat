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
import ModalDeleteCategorias from "../../containers/ModalDeleteCategorias";

const classes = {
    name: 'ModuleCategorias'
};

@inject('store')
@observer
class ModuleCategorias extends Component {
    static title = 'Categorias';
    static descripcion = `Descripcion de la pagina web principal`;

    constructor(props) {
        super(props);
        this.state = {
            delete: null
        };
    }

    static async getInitialProps(ctx) {
        await ctx.mobxStore.Categorias.getAll();
    }

    modal() {
        if (this.state.delete === null) return null;
        return (
            <ModalDeleteCategorias
                show={this.state.delete !== null}
                item={this.state.delete}
                onClose={() => {
                    this.setState({delete: null});
                }}
            />
        );
    }

    rows() {
        return this.props.store.Categorias.categorias.map((item) => {
            return (
                <Table__row key={item._id}>
                    <Table__col>{item._categoria}</Table__col>
                    <Table__col>
                        <Group>
                            <Url route={'categoriasActualizar'} params={{id: item._id}}><Btn outline type={'primary'} icon><Icon icon={'lnr lnr-pencil'}/></Btn></Url>
                            <Btn onClick={e => this.setState({delete: item})} outline type={'primary'} icon><Icon icon={'lnr lnr-trash'}/></Btn>
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
                    <span>Listado Categorias</span>
                    <Url route="categoriasRegistro">
                        <Btn outline type={'primary'}>Registrar categoria</Btn>
                    </Url>
                </Page__title>
                <Card default>
                    <Card__body>
                        <Table>
                            <Table__thead>
                                <Table__row>
                                    <Table__col>Categoria</Table__col>
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

export default ModuleCategorias;