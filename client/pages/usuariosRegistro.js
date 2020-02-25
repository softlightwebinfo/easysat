import React, {Component} from 'react';
import {inject, observer} from "mobx-react";
import {Config} from '../app/settings/config';
import TemplateDasboard from "../app/templates/TemplateDasboard";
import ModuleUsuariosRegistro from "../app/modules/usuarios/ModuleUsuariosRegistro";
import {Page} from "../app/hocs/Page";

@inject('store') @observer
class Index extends Component {
    constructor(props) {
        super(props);
    }

    static async getInitialProps(ctx) {
        await ModuleUsuariosRegistro.getInitialProps(ctx);
    }

    render() {
        // console.log(this.props.store)
        return (
            <TemplateDasboard
                appName={Config.appName}
                title={ModuleUsuariosRegistro.title}
                description={ModuleUsuariosRegistro.descripcion}
            >
                <ModuleUsuariosRegistro/>
            </TemplateDasboard>
        )
    }
}

export default Page(Index, true);