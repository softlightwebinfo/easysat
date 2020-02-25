import React, {Component} from 'react';
import {inject, observer} from "mobx-react";
import {Config} from '../app/settings/config';
import TemplateDasboard from "../app/templates/TemplateDasboard";
import ModuleUsuariosActualizar from "../app/modules/usuarios/ModuleUsuariosActualizar";
import {Page} from "../app/hocs/Page";

@inject('store') @observer
class Index extends Component {
    constructor(props) {
        super(props);
    }

    static async getInitialProps(ctx) {
        await ModuleUsuariosActualizar.getInitialProps(ctx);
    }

    render() {
        // console.log(this.props.store)
        return (
            <TemplateDasboard
                appName={Config.appName}
                title={ModuleUsuariosActualizar.title}
                description={ModuleUsuariosActualizar.descripcion}
            >
                <ModuleUsuariosActualizar/>
            </TemplateDasboard>
        )
    }
}

export default Page(Index, true);