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
import {inject, observer} from 'mobx-react';
import {withRouter} from 'next/router';
import Buttons from "../../components/Buttons/Buttons";
import Etiqueta from "../../components/Etiqueta/Etiqueta";
import LoaderInWhite from "../../components/Loader/LoaderInWhite";

const classes = {
    name: 'ModuleClientesActualizar'
};
const initialState = {
    nombre: '',
    cif: ''
};


@inject('store')
@observer
class ModuleEmpresasActualizar extends Component {
    static title = 'Actualizar empresa';
    static descripcion = `Descripcion de la pagina web principal`;

    constructor(props) {
        super(props);
        this.state = {
            ...initialState,
            nombre: props.store.Empresas.empresa._nombre,
            cif: props.store.Empresas.empresa._cif
        };
    }

    static async getInitialProps(ctx) {
        let {id} = ctx.query;
        await ctx.mobxStore.Empresas.get(id);
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
            this.props.store.Empresas.modificar({
                nombre: this.state.nombre,
                cif: this.state.cif,
            }, () => {
                // this.setState(initialState);
            });
        }
    }

    render() {
        return (
            <Container>
                <Page__title separate>
                    <span>Actualizar empresa <Etiqueta mensaje={this.props.store.Empresas.empresa._nombre}/></span>
                    <div>
                        <Url style={{marginRight: 10}} route={"empresas"}><Btn outline type={'primary'}>Listar empresas</Btn></Url>
                        <Url route={"empresasRegistro"}><Btn outline type={'primary'}>Registrar empresa</Btn></Url>
                    </div>
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
                                    <Btn btnType={'submit'} type={'primary'} outline>Guardar empresa</Btn>
                                )
                            }
                        </Form>
                    </Card__body>
                </Card>
            </Container>
        );
    }
}

export default withRouter(ModuleEmpresasActualizar);