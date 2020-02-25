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
import ModalDeleteRoles from "../../containers/ModalDeleteRoles";

const classes = {
    name: 'ModuleRoles'
};

@inject('store')
@observer
class ModuleRoles extends Component {
    static title = 'Roles';
    static descripcion = `Descripcion de la pagina web principal`;

    constructor(props) {
        super(props);
        this.state = {
            delete: null
        };
    }

    static async getInitialProps(ctx) {
        await ctx.mobxStore.Roles.getAll();
    }

    modal() {
        if (this.state.delete === null) return null;
        return (
            <ModalDeleteRoles
                show={this.state.delete !== null}
                item={this.state.delete}
                onClose={() => {
                    this.setState({delete: null});
                }}
            />
        );
    }

    rows() {
        let rows = [];
        return this.props.store.Roles.roles.map((item, i) => {
            return (
                <Table__row key={item._role}>
                    <Table__col>{item._role}</Table__col>
                    <Table__col>
                        <Group>
                            {item._role != 'Administrador' && <Url route={'rolesActualizar'} params={{id: item._role}}><Btn outline type={'primary'} icon><Icon icon={'lnr lnr-pencil'}/></Btn></Url>}
                            {item._role != 'Administrador' && <Btn onClick={e => this.setState({delete: item})} outline type={'primary'} icon><Icon icon={'lnr lnr-trash'}/></Btn>}
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
                    <span>Listado Roles</span>
                    <Url route="rolesRegistro">
                        <Btn outline type={'primary'}>Registrar role</Btn>
                    </Url>
                </Page__title>
                <Card default>
                    <Card__body>
                        <Table>
                            <Table__thead>
                                <Table__row>
                                    <Table__col>Role</Table__col>
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

export default ModuleRoles;