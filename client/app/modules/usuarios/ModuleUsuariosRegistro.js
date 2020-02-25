import React, {Component} from 'react'
import PropTypes from 'prop-types';
import cx from 'bem-classnames';
import Container from "../../components/Grid/Container";
import Page__title from "../../components/Page/Page__title";
import Card from "../../components/Card/Card";
import Card__body from "../../components/Card/Card__body";
import ModuleUsuarios from "./ModuleUsuarios";
import FormGroup from "../../components/FormGroup/FormGroup";
import Form from "../../components/Form/Form";
import Input from "../../components/Input/Input";
import Label from "../../components/Label/Label";
import Btn from "../../components/Btn/Btn";
import Url from "../../components/Url/Url";
import {inject, observer} from 'mobx-react';
import Loader from "../../components/Loader/Loader";

const classes = {
    name: 'ModuleUsuariosRegistro'
};
const initialState = {
    nombre: '',
    email: '',
    password: ''
};

@inject('store')
@observer
class ModuleUsuariosRegistro extends Component {
    static title = 'Crear usuario';
    static descripcion = `Descripcion de la pagina web principal`;

    constructor(props) {
        super(props);
        this.state = initialState
    }

    static async getInitialProps(ctx) {

    }

    onSubmit(e) {
        e.preventDefault();
        const {
            nombre,
            email,
            password
        } = this.state;
        let error = 0;
        if (!nombre.trim().length) {
            error++;
        }
        if (!error) {
            this.props.store.Usuarios.registrar({
                nombre,
                email,
                password
            }, (usuario) => {
                this.setState(initialState);
            });
        }
    }

    render() {
        return (
            <Container>
                <Page__title separate>
                    <span>Registrar nuevo usuario</span>
                    <Url route={"usuarios"}><Btn outline type={'primary'}>Listar usuarios</Btn></Url>
                </Page__title>
                <Card default>
                    <Card__body>
                        <Form onSubmit={this.onSubmit.bind(this)}>
                            <FormGroup>
                                <Label text={'Nombre*:'}/>
                                <Input
                                    value={this.state.nombre}
                                    onChange={e => this.setState({nombre: e.target.value})}
                                    name={"nombre"}
                                    placeholder="Nombre*"
                                />
                            </FormGroup>
                            <FormGroup>
                                <Label text={'Correo electronico:'}/>
                                <Input
                                    value={this.state.email}
                                    onChange={e => this.setState({email: e.target.value})}
                                    name={"email"}
                                    placeholder="Correo electronico"
                                />
                            </FormGroup>
                            <FormGroup>
                                <Label text={'Contraseña:'}/>
                                <Input
                                    value={this.state.password}
                                    onChange={e => this.setState({password: e.target.value})}
                                    name={"password"}
                                    type={'password'}
                                    placeholder="Contraseña"
                                />
                            </FormGroup>
                            {
                                this.props.store.Usuarios.saveLoader ? (
                                    <Loader
                                        style={{
                                            stroke: '#c7c3c3',
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            margin: 'auto'
                                        }}
                                    />
                                ) : (
                                    <Btn btnType={'submit'} type={'primary'} outline>Registrar usuario</Btn>
                                )
                            }
                        </Form>
                    </Card__body>
                </Card>
            </Container>
        );
    }
}

export default ModuleUsuariosRegistro;