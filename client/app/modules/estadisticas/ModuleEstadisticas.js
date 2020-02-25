import React, {Component} from 'react'
import Container from "../../components/Grid/Container";
import Page__title from "../../components/Page/Page__title";
import Card from "../../components/Card/Card";
import Card__body from "../../components/Card/Card__body";
import {observer, inject} from 'mobx-react';
import Card__title from "../../components/Card/Card__title";
import Card__number from "../../components/Card/Card__number";
import Row from "../../components/Grid/Row";
import Col from "../../components/Grid/Col";

const classes = {
    name: 'ModuleEstadisticas'
};

@inject('store')
@observer
class ModuleEstadisticas extends Component {
    static title = 'Estadisticas';
    static descripcion = `Descripcion de la pagina web principal`;

    constructor(props) {
        super(props);
        this.state = {};
    }

    static async getInitialProps(ctx) {
        await ctx.mobxStore.Estadisticas.getAll();
    }

    estadisticas() {
        return (
            <Row>
                {
                    this.props.store.Estadisticas.estadisticas.map((item, index) => {
                        return (
                            <Col
                                sm={12}
                                md={6}
                                lg={4}
                                xl={3}
                                key={item._key}
                            >
                                <Card
                                    default
                                >
                                    <Card__body>
                                        <Card__title>{item._nombre}</Card__title>
                                        <Card__number>{item._valor}</Card__number>
                                    </Card__body>
                                </Card>
                            </Col>
                        );
                    })
                }
            </Row>
        );
    }

    render() {
        return (
            <Container>
                <Page__title>
                    <span>Estadisticas</span>
                </Page__title>
                {this.estadisticas()}
            </Container>
        );
    }
}

export default ModuleEstadisticas;