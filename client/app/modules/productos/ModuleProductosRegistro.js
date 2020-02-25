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
import {inject, observer} from 'mobx-react';
import LoaderInWhite from "../../components/Loader/LoaderInWhite";

const classes = {
    name: 'ModuleProductosRegistro'
};
const initialState = {
    referencia: '',
    nombre: '',
    precio: ''
};

@inject('store')
@observer
class ModuleProductosRegistro extends Component {
    static title = 'Crear producto';
    static descripcion = `Descripcion de la pagina web principal`;

    constructor(props) {
        super(props);
        this.state = initialState;
    }

    static async getInitialProps(ctx) {

    }

    onSubmit(e) {
        e.preventDefault();
        let error = 0;
        if (!this.state.referencia.trim().length) {
            error++;
        }
        if (!this.state.nombre.trim().length) {
            error++;
        }
        if (!this.state.precio.trim().length) {
            error++;
        }
        if (!error) {
            this.props.store.Productos.registrar({
                referencia: this.state.referencia,
                nombre: this.state.nombre,
                precio: this.state.precio
            }, () => {
                this.setState(initialState);
            })
        }
    }

    render() {
        return (
            <Container>
                <Page__title separate>
                    <span>Registrar nuevo producto</span>
                    <Url route={"productos"}><Btn outline type={'primary'}>Listar productos</Btn></Url>
                </Page__title>
                <Card default>
                    <Card__body>
                        <Form onSubmit={this.onSubmit.bind(this)}>
                            <FormGroup>
                                <Label text={'Ref*:'}/>
                                <Input
                                    required
                                    value={this.state.referencia}
                                    onChange={e => this.setState({referencia: e.target.value})}
                                    name={"ref"}
                                    placeholder="Ref"
                                />
                            </FormGroup>
                            <FormGroup>
                                <Label text={'Nombre*:'}/>
                                <Input
                                    required
                                    value={this.state.nombre}
                                    onChange={e => this.setState({nombre: e.target.value})}
                                    name={"nombre"}
                                    placeholder="Nombre"
                                />
                            </FormGroup>
                            <FormGroup>
                                <Label text={'Precio*:'}/>
                                <Input
                                    required
                                    step='0.01'
                                    value={this.state.precio}
                                    onChange={e => this.setState({precio: e.target.value})}
                                    name={"precio"}
                                    type={'number'}
                                    placeholder="Precio"
                                />
                            </FormGroup>
                            {
                                this.props.store.Productos.saveLoader ? (
                                    <LoaderInWhite/>
                                ) : (
                                    <Btn btnType={'submit'} type={'primary'} outline>Registrar producto</Btn>
                                )
                            }
                        </Form>
                    </Card__body>
                </Card>
            </Container>
        );
    }
}

export default ModuleProductosRegistro;