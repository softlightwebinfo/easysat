import React, {Component} from 'react'
import Container from "../../components/Grid/Container";
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
import {withRouter} from 'next/router';
import Buttons from "../../components/Buttons/Buttons";

const classes = {
    name: 'ModuleReparacionesActualizar'
};

class ModuleReparacionesActualizar extends Component {
    static title = 'Actualizar Reparacion';
    static descripcion = `Descripcion de la pagina web principal`;

    constructor(props) {
        super(props);
        this.state = {};
    }

    static async getInitialProps(ctx) {

    }

    render() {
        let {id} = this.props.router.query;
        return (
            <Container>
                <Page__title separate>
                    <span>Actualizar reparacion {id}</span>
                    <div>
                        <Url style={{marginRight: 10}} route={"reparaciones"}><Btn outline type={'primary'}>Listar reparaciones</Btn></Url>
                        <Url route={"reparacionesRegistro"}><Btn outline type={'primary'}>Nueva reparación</Btn></Url>
                    </div>
                </Page__title>
                <Card default>
                    <Card__body>
                        <Form>
                            <FormGroup>
                                <Label text={'Categoria:'}/>
                                <Input
                                    name={"categoria"}
                                    placeholder="Categoria"
                                />
                            </FormGroup>
                            <Btn btnType={'submit'} type={'primary'} outline>Modificar reparación</Btn>
                        </Form>
                    </Card__body>
                </Card>
            </Container>
        );
    }
}

export default withRouter(ModuleReparacionesActualizar);