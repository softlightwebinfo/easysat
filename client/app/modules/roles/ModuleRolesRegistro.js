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
    name: 'ModuleRolesRegistro'
};
const initialState = {
    role: ''
};

@inject('store')
@observer
class ModuleRolesRegistro extends Component {
    static title = 'Crear Role';
    static descripcion = `Descripcion de la pagina web principal`;

    constructor(props) {
        super(props);
        this.state = {};
    }

    static async getInitialProps(ctx) {

    }

    onSubmit(e) {
        e.preventDefault();
        let error = 0;
        if (!this.state.role.trim().length) {
            error++;
        }
        if (!error) {
            this.props.store.Roles.registrar({
                role: this.state.role
            }, () => {
                this.setState(initialState);
            });
        }
    }

    render() {
        return (
            <Container>
                <Page__title separate>
                    <span>Registrar nuevo role(Cargo)</span>
                    <Url route={"roles"}><Btn outline type={'primary'}>Listar roles</Btn></Url>
                </Page__title>
                <Card default>
                    <Card__body>
                        <Form onSubmit={this.onSubmit.bind(this)}>
                            <FormGroup>
                                <Label text={'Role:'}/>
                                <Input
                                    value={this.state.role}
                                    onChange={e => this.setState({role: e.target.value})}
                                    name={"role"}
                                    placeholder="Role(Cargo)"
                                />
                            </FormGroup>
                            {
                                this.props.store.Roles.saveLoader ? (
                                    <LoaderInWhite/>
                                ) : (
                                    <Btn btnType={'submit'} type={'primary'} outline>Registrar role(Cargo)</Btn>
                                )
                            }
                        </Form>
                    </Card__body>
                </Card>
            </Container>
        );
    }
}

export default ModuleRolesRegistro;