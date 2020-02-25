import React, {Component} from 'react';
import {inject, observer} from "mobx-react";
import HolaMundo from '../app/components/HolaMundo/HolaMundo.js';
import Prueba from "../app/components/Prueba/Prueba";
import {Config} from '../app/settings/config';
import TemplateDefault from "../app/templates/TemplateDefault";
import TemplateDasboard from "../app/templates/TemplateDasboard";
import Container from "../app/components/Grid/Container";
import Row from "../app/components/Grid/Row";
import Card from "../app/components/Card/Card";
import Card__body from "../app/components/Card/Card__body";
import Card__title from "../app/components/Card/Card__title";
import Col from "../app/components/Grid/Col";
import Texto from "../app/components/Texto/Texto";
import Card__number from "../app/components/Card/Card__number";
import Page__title from "../app/components/Page/Page__title";
import {Page} from "../app/hocs/Page";
// import {Button} from '@codeunic/codeunic';
// import {}

@inject('store') @observer
class Index extends Component {
    constructor(props) {
        super(props);
    }

    static async getInitialProps(ctx) {
        // ctx.mobxStore.Languaje.changeLang('en');
    }

    componentDidMount() {
        // this.props.store.start()
    }

    componentWillUnmount() {
        // this.props.store.stop()
    }

    render() {
        // console.log(this.props.store)
        return (
            <TemplateDasboard
                appName={Config.appName}
                title={`Pagina web principal`}
                description={`Descripcion de la pagina web principal`}
            >
                <Container>
                    <Page__title>Dashboard home</Page__title>
                    <Row>
                        <Col>
                            <Card default>
                                <Card__body>
                                    <Card__title>TOTAL PRODUCTOS</Card__title>
                                    <Card__number>800</Card__number>
                                </Card__body>
                            </Card>
                        </Col>
                        <Col>
                            <Card default>
                                <Card__body>
                                    <Card__title>TOTAL PRODUCTOS</Card__title>
                                    <Card__number>800</Card__number>
                                </Card__body>
                            </Card>
                        </Col>
                        <Col>
                            <Card default>
                                <Card__body>
                                    <Card__title>TOTAL PRODUCTOS</Card__title>
                                    <Card__number>800</Card__number>
                                </Card__body>
                            </Card>
                        </Col>
                        <Col>
                            <Card default>
                                <Card__body>
                                    <Card__title>TOTAL PRODUCTOS</Card__title>
                                    <Card__number>800</Card__number>
                                </Card__body>
                            </Card>
                        </Col>
                        <Col sm={12} md={12} lg={12}>
                            <Card default>
                                <Card__body/>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </TemplateDasboard>
        )
    }
}

export default Page(Index, true);