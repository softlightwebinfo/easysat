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
import Loader from "../../components/Loader/Loader";
import {inject, observer} from 'mobx-react';

const classes = {
    name: 'ModuleCategoriasRegistro'
};
const initialState = {
    categoria: ''
};

@inject('store')
@observer
class ModuleCategoriasRegistro extends Component {
    static title = 'Crear categoria';
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
        if (!this.state.categoria.trim().length) {
            error++;
        }
        if (!error) {
            this.props.store.Categorias.registrar({
                categoria: this.state.categoria
            }, () => {
                this.setState(initialState);
            });
        }
    }

    render() {
        return (
            <Container>
                <Page__title separate>
                    <span>Registrar nueva categoria</span>
                    <Url route={"categorias"}><Btn outline type={'primary'}>Listar categorias</Btn></Url>
                </Page__title>
                <Card default>
                    <Card__body>
                        <Form onSubmit={this.onSubmit.bind(this)}>
                            <FormGroup>
                                <Label text={'Categoria:'}/>
                                <Input
                                    value={this.state.categoria}
                                    onChange={e => this.setState({categoria: e.target.value})}
                                    name={"categoria"}
                                    placeholder="Categoria"
                                />
                            </FormGroup>
                            {
                                this.props.store.Categorias.saveLoader ? (
                                    <Loader style={{
                                        stroke: '#c7c3c3',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        margin: 'auto'
                                    }}/>
                                ) : (
                                    <Btn btnType={'submit'} type={'primary'} outline>Registrar categoria</Btn>
                                )
                            }
                        </Form>
                    </Card__body>
                </Card>
            </Container>
        );
    }
}

export default ModuleCategoriasRegistro;