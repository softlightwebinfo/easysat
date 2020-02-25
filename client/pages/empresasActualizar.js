import React, {Component} from 'react';
import {inject, observer} from "mobx-react";
import {Config} from '../app/settings/config';
import TemplateDasboard from "../app/templates/TemplateDasboard";
import ModuleEmpresasActualizar from "../app/modules/empresas/ModuleEmpresasActualizar";
import {Page} from "../app/hocs/Page";

@inject('store') @observer
class Index extends Component {
    constructor(props) {
        super(props);
    }

    static async getInitialProps(ctx) {
        await ModuleEmpresasActualizar.getInitialProps(ctx);
    }

    render() {
        // console.log(this.props.store)
        return (
            <TemplateDasboard
                appName={Config.appName}
                title={ModuleEmpresasActualizar.title}
                description={ModuleEmpresasActualizar.descripcion}
            >
                <ModuleEmpresasActualizar/>
            </TemplateDasboard>
        )
    }
}

export default Page(Index, true);