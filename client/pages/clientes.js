import React, {Component} from 'react';
import {inject, observer} from "mobx-react";
import TemplateDasboard from "../app/templates/TemplateDasboard";
import ModuleClientes from "../app/modules/clientes/ModuleClientes";
import {Config} from "../app/settings/config";
import {Page} from "../app/hocs/Page";
// import {Button} from '@codeunic/codeunic';
// import {}

@inject('store') @observer
class Index extends Component {
    constructor(props) {
        super(props);
    }

    static async getInitialProps(ctx) {
      await ModuleClientes.getInitialProps(ctx);
    }

    render() {
        // console.log(this.props.store)
        return (
            <TemplateDasboard
                appName={Config.appName}
                title={ModuleClientes.title}
                description={ModuleClientes.descripcion}
            >
                <ModuleClientes/>
            </TemplateDasboard>
        )
    }
}

export default Page(Index,true);