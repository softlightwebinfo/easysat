import React, {Component} from 'react';
import {inject, observer} from "mobx-react";
import HolaMundo from '../app/components/HolaMundo/HolaMundo.js';
import Prueba from "../app/components/Prueba/Prueba";
import {Config} from '../app/settings/config';
import TemplateDefault from "../app/templates/TemplateDefault";
import TemplateDasboard from "../app/templates/TemplateDasboard";
import Container from "../app/components/Grid/Container";
import Row from "../app/components/Grid/Row";
import Col from "../app/components/Grid/Col";
import ProfileCard from "../app/layouts/ProfileCard";
import Card__body from "../app/components/Card/Card__body";
import Card__title from "../app/components/Card/Card__title";
import Card from "../app/components/Card/Card";
import FormProfile from "../app/containers/FormProfile";
// import {Button} from '@codeunic/codeunic';
import {Page} from "../app/hocs/Page";

// import {}

@inject('store') @observer
class Index extends Component {
    constructor(props) {
        super(props);
    }

    static async getInitialProps(ctx) {
        await ctx.mobxStore.Auth.User.loadPerfil();
    }

    render() {
        // console.log(this.props.store)
        return (
            <TemplateDasboard
                appName={Config.appName}
                title={`Perfil`}
                description={`Descripcion de la pagina web principal`}
            >
                <Container>
                    <ProfileCard
                        avatar={"/static/images/avatar.png"}
                        nombre={this.props.store.Auth.User.nombre}
                        role={this.props.store.Auth.User.role}
                        email={this.props.store.Auth.User.email}
                        telefono={"971456789"}
                    />
                </Container>
            </TemplateDasboard>
        )
    }
}

export default Page(Index, true);