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
// import {observable} from 'mobx';
const classes = {
    name: 'ModuleReparaciones'
};

class ModuleReparaciones extends Component {
    static title = 'Reparaciones';
    static descripcion = `Descripcion de la pagina web principal`;

    constructor(props) {
        super(props);
        this.state = {};
    }

    static async getInitialProps(ctx) {

    }

    rows() {
        let rows = [];
        for (var i = 0; i < 10; i++) {
            rows.push(
                <Table__row key={i}>
                    <Table__col>nº{i}</Table__col>
                    <Table__col>Rafael gonzalez muñoz</Table__col>
                    <Table__col>662223768</Table__col>
                    <Table__col>Urgente</Table__col>
                    <Table__col>Descripcion de la reparación</Table__col>
                    <Table__col>
                        <Group>
                            <Url route={'reparacionesActualizar'} params={{id: i}}><Btn outline type={'primary'} icon><Icon icon={'lnr lnr-pencil'}/></Btn></Url>
                            <Btn outline type={'primary'} icon><Icon icon={'lnr lnr-trash'}/></Btn>
                        </Group>
                    </Table__col>
                </Table__row>
            )
        }
        return rows;
    }

    render() {
        return (
            <Container>
                <Page__title separate>
                    <span>Listado Reparaciones</span>
                    <Url route="reparacionesRegistro">
                        <Btn outline type={'primary'}>Nueva reparación</Btn>
                    </Url>
                </Page__title>
                <Card default>
                    <Card__body>
                        <Table>
                            <Table__thead>
                                <Table__row>
                                    <Table__col style={{width: 70}}>Ref.</Table__col>
                                    <Table__col style={{width: 120}}>Cliente</Table__col>
                                    <Table__col style={{width: 90}}>Telefono</Table__col>
                                    <Table__col style={{width: 90}}>Estado</Table__col>
                                    <Table__col>Descripcion</Table__col>
                                    <Table__col style={{width: 100}}>Conf.</Table__col>
                                </Table__row>
                            </Table__thead>
                            <Table__tbody>
                                {this.rows()}
                            </Table__tbody>
                        </Table>
                    </Card__body>
                </Card>
            </Container>
        );
    }
}

export default ModuleReparaciones;