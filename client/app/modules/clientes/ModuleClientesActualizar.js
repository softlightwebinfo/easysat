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
import LoaderInWhite from "../../components/Loader/LoaderInWhite";
import Etiqueta from "../../components/Etiqueta/Etiqueta";

const classes = {
    name: 'ModuleClientesActualizar'
};
const initialState = {
    nombre: ''
};

@inject('store')
@observer
class ModuleClientesActualizar extends Component {
    static title = 'Actualizar cliente';
    static descripcion = `Descripcion de la pagina web principal`;

    constructor(props) {
        super(props);
        this.state = {
            ...initialState,
            nombre: props.store.Clientes.cliente._nombre
        };
    }

    static async getInitialProps(ctx) {
        let {id} = ctx.query;
        await ctx.mobxStore.Clientes.get(id);
    }

    onSubmit(e) {
        e.preventDefault();
        let error = 0;
        if (!this.state.nombre.trim().length) {
            error++;
        }
        if (!error) {
            this.props.store.Clientes.modificar({
                nombre: this.state.nombre
            }, () => {
                // this.setState(initialState);
            });
        }
    }

    render() {
        let {id} = this.props.router.query;
        return (
            <Container>
                <Page__title separate>
                    <span>Actualizar cliente <Etiqueta mensaje={this.props.store.Clientes.cliente._nombre}/></span>
                    <div>
                        <Url style={{marginRight: 10}} route={"clientes"}><Btn outline type={'primary'}>Listar clientes</Btn></Url>
                        <Url route={"clientesRegistro"}><Btn outline type={'primary'}>Registrar cliente</Btn></Url>
                    </div>
                </Page__title>
                <Card default>
                    <Card__body>
                        <Form onSubmit={this.onSubmit.bind(this)}>
                            <FormGroup>
                                <Label text={'Nombre:'}/>
                                <Input
                                    value={this.state.nombre}
                                    onChange={e => this.setState({nombre: e.target.value})}
                                    name={"nombre"}
                                    placeholder="Nombre"
                                />
                            </FormGroup>
                            {
                                this.props.store.Clientes.saveLoader ? (
                                    <LoaderInWhite/>
                                ) : (
                                    <Btn btnType={'submit'} type={'primary'} outline>Guardar cliente</Btn>
                                )
                            }
                        </Form>
                    </Card__body>
                </Card>
            </Container>
        );
    }
}

export default withRouter(ModuleClientesActualizar);