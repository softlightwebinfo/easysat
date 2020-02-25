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
import {Router} from '../../../routes';
import LoaderInWhite from "../../components/Loader/LoaderInWhite";

const initialState = {
    role: ''
}
const classes = {
    name: 'ModuleProductosActualizar'
};

@inject('store')
@observer
class ModuleRolesActualizar extends Component {
    static title = 'Actualizar Role(Cargo)';
    static descripcion = `Descripcion de la pagina web principal`;

    constructor(props) {
        super(props);
        this.state = {
            ...initialState,
            role: props.store.Roles.role._role
        };
    }

    static async getInitialProps(ctx) {
        let {id} = ctx.query;
        await ctx.mobxStore.Roles.get(id);
    }

    onSubmit(e) {
        e.preventDefault();
        let error = 0;
        if (!this.state.role.trim().length) {
            error++;
        }
        if (!error) {
            this.props.store.Roles.modificar({
                role: this.state.role
            }, () => {
                Router.pushRoute('roles');
                // this.setState(initialState);
            });
        }
    }

    render() {
        // let {id} = this.props.router.query;
        return (
            <Container>
                <Page__title separate>
                    <span>Actualizar role <Etiqueta mensaje={this.props.store.Roles.role._role}/></span>
                    <div>
                        <Url style={{marginRight: 10}} route={"roles"}><Btn outline type={'primary'}>Listar role</Btn></Url>
                        <Url route={"rolesRegistro"}><Btn outline type={'primary'}>Registrar role</Btn></Url>
                    </div>
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
                                    <Btn btnType={'submit'} type={'primary'} outline>Modificar role(Cargo)</Btn>
                                )
                            }
                        </Form>
                    </Card__body>
                </Card>
            </Container>
        );
    }
}

export default withRouter(ModuleRolesActualizar);