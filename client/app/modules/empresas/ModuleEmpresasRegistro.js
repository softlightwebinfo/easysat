import React, {Component} from 'react'
import PropTypes from 'prop-types';
import cx from 'bem-classnames';
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
import {inject, observer} from 'mobx-react';
import LoaderInWhite from "../../components/Loader/LoaderInWhite";

const classes = {
    name: 'ModuleClientesRegistro'
};
const initialState = {
    nombre: '',
    cif: ''
};

@inject('store')
@observer
class ModuleEmpresasRegistro extends Component {
    static title = 'Crear Empresa';
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
        if (!this.state.nombre.trim().length) {
            error++;
        }
        if (!this.state.cif.trim().length) {
            error++;
        }
        if (!error) {
            this.props.store.Empresas.registrar({
                nombre: this.state.nombre,
                cif: this.state.cif,
            }, () => {
                this.setState(initialState);
            });
        }
    }

    render() {
        return (
            <Container>
                <Page__title separate>
                    <span>Registrar nueva empresa</span>
                    <Url route={"empresas"}><Btn outline type={'primary'}>Listar empresas</Btn></Url>
                </Page__title>
                <Card default>
                    <Card__body>
                        <Form onSubmit={this.onSubmit.bind(this)}>
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
                                <Label text={'Cif*:'}/>
                                <Input
                                    required
                                    value={this.state.cif}
                                    onChange={e => this.setState({cif: e.target.value})}
                                    name={"cif"}
                                    placeholder="cif"
                                />
                            </FormGroup>
                            {
                                this.props.store.Empresas.saveLoader ? (
                                    <LoaderInWhite/>
                                ) : (
                                    <Btn btnType={'submit'} type={'primary'} outline>Registrar empresa</Btn>
                                )
                            }
                        </Form>
                    </Card__body>
                </Card>
            </Container>
        );
    }
}

export default ModuleEmpresasRegistro;