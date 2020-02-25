import React, {Component} from 'react'
import Container from "../../components/Grid/Container";
import Page__title from "../../components/Page/Page__title";
import Card from "../../components/Card/Card";
import Card__body from "../../components/Card/Card__body";

const classes = {
    name: 'ModuleEstadisticasGlobales'
};

class ModuleEstadisticasGlobales extends Component {
    static title = 'Estadisticas';
    static descripcion = `Descripcion de la pagina web principal`;

    constructor(props) {
        super(props);
        this.state = {};
    }

    static async getInitialProps(ctx) {

    }

    render() {
        return (
            <Container>
                <Page__title>
                    <span>Estadisticas Globales</span>
                </Page__title>
                <Card default>
                    <Card__body>

                    </Card__body>
                </Card>
            </Container>
        );
    }
}

export default ModuleEstadisticasGlobales;