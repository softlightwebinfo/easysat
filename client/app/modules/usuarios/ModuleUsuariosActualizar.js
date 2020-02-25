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
    name: 'ModuleUsuariosActualizar'
};
const initialState = {
    nombre: '',
    email: '',
    password: ''
};

@inject('store')
@observer
class ModuleUsuariosActualizar extends Component {
    static title = 'Modificar usuario';
    static descripcion = `Descripcion de la pagina web principal`;

    constructor(props) {
        super(props);
        let user = props.store.Usuarios.usuario;

        this.state = {
            ...initialState,
            nombre: user._nombre,
            email: user._email
        }
    }

    static async getInitialProps(ctx) {
        let {id} = ctx.query;
        await ctx.mobxStore.Usuarios.get(Number(id));
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
            this.props.store.Usuarios.modificar({
                nombre,
                email,
                password
            }, (usuario) => {
                // this.setState(initialState);
            });
        }
    }

    render() {
        let user = this.props.store.Usuarios.usuario;
        return (
            <Container>
                <Page__title separate>
                    <span>Modificar usuario</span>
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
                                    <Btn btnType={'submit'} type={'primary'} outline>Guardar usuario</Btn>
                                )
                            }
                        </Form>
                    </Card__body>
                </Card>
            </Container>
        );
    }
}

export default ModuleUsuariosActualizar;