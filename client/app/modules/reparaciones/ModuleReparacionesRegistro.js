import React, {Component} from 'react'
import PropTypes from 'prop-types';
import cx from 'bem-classnames';
import Container from "../../components/Grid/Container";
import Texto from "../../components/Texto/Texto";
import Page__title from "../../components/Page/Page__title";
import Card from "../../components/Card/Card";
import Card__body from "../../components/Card/Card__body";
import FormGroup from "../../components/FormGroup/FormGroup";
import Form from "../../components/Form/Form";
import Input from "../../components/Input/Input";
import Label from "../../components/Label/Label";
import Btn from "../../components/Btn/Btn";
import Url from "../../components/Url/Url";
// import {observable} from 'mobx';
const classes = {
    name: 'ModuleReparacionesRegistro'
};

class ModuleReparacionesRegistro extends Component {
    static title = 'Nueva reparación';
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
                <Page__title separate>
                    <span>Nueva Reparación</span>
                    <Url route={"reparaciones"}><Btn outline type={'primary'}>Listar reparaciones</Btn></Url>
                </Page__title>
                <Card default>
                    <Card__body>
                        <Form>
                            <FormGroup>
                                <Label text={'Cliente:'}/>
                                <Input
                                    name={"categoria"}
                                    placeholder="Categoria"
                                />
                            </FormGroup>
                            <Btn btnType={'submit'} type={'primary'} outline>Nueva Reparación</Btn>
                        </Form>
                    </Card__body>
                </Card>
            </Container>
        );
    }
}

export default ModuleReparacionesRegistro;