import React, {Component} from 'react';
import {inject, observer} from "mobx-react";
import {Config} from '../app/settings/config';
import TemplateDasboard from "../app/templates/TemplateDasboard";
import ModuleEmpresasRegistro from "../app/modules/empresas/ModuleEmpresasRegistro";

@inject('store') @observer
class Index extends Component {
    constructor(props) {
        super(props);
    }

    static async getInitialProps(ctx) {
        ModuleEmpresasRegistro.getInitialProps(ctx);
    }

    render() {
        // console.log(this.props.store)
        return (
            <TemplateDasboard
                appName={Config.appName}
                title={ModuleEmpresasRegistro.title}
                description={ModuleEmpresasRegistro.descripcion}
            >
                <ModuleEmpresasRegistro/>
            </TemplateDasboard>
        )
    }
}

export default Index;