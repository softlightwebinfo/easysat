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
    name: 'ModuleCategoriasActualizar'
};
const initialState = {
    categoria: ''
};

@inject('store')
@observer
class ModuleCategoriasActualizar extends Component {
    static title = 'Actualizar categoria';
    static descripcion = `Descripcion de la pagina web principal`;

    constructor(props) {
        super(props);
        this.state = {
            ...initialState,
            categoria: props.store.Categorias.categoria._categoria
        };
    }

    static async getInitialProps(ctx) {
        let {id} = ctx.query;
        await ctx.mobxStore.Categorias.get(Number(id));
    }
    onSubmit(e) {
        e.preventDefault();
        let error = 0;
        if (!this.state.categoria.trim().length) {
            error++;
        }
        if (!error) {
            this.props.store.Categorias.modificar({
                categoria: this.state.categoria
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
                    <span>Actualizar categoria <Etiqueta mensaje={this.props.store.Categorias.categoria._categoria}/></span>
                    <div>
                        <Url style={{marginRight: 10}} route={"categorias"}><Btn outline type={'primary'}>Listar categorias</Btn></Url>
                        <Url route={"categoriasRegistro"}><Btn outline type={'primary'}>Registrar categoria</Btn></Url>
                    </div>
                </Page__title>
                <Card default>
                    <Card__body>
                        <Form onSubmit={this.onSubmit.bind(this)}>
                            <FormGroup>
                                <Label text={'Categoria:'}/>
                                <Input
                                    name={"categoria"}
                                    placeholder="Categoria"
                                    value={this.state.categoria}
                                    onChange={e => this.setState({categoria: e.target.value})}
                                />
                            </FormGroup>
                            {
                                this.props.store.Categorias.saveLoader ? (
                                    <LoaderInWhite/>
                                ) : (
                                    <Btn btnType={'submit'} type={'primary'} outline>Modificar categoria</Btn>
                                )
                            }
                        </Form>
                    </Card__body>
                </Card>
            </Container>
        );
    }
}

export default withRouter(ModuleCategoriasActualizar);