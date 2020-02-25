import React, {Component} from 'react';
import {inject, observer} from "mobx-react";
import TemplateDasboard from "../app/templates/TemplateDasboard";
import {Config} from "../app/settings/config";
import {Page} from "../app/hocs/Page";
import ModuleEmpresas from "../app/modules/empresas/ModuleEmpresas";
// import {Button} from '@codeunic/codeunic';
// import {}

@inject('store') @observer
class Index extends Component {
    constructor(props) {
        super(props);
    }

    static async getInitialProps(ctx) {
      await ModuleEmpresas.getInitialProps(ctx);
    }

    render() {
        // console.log(this.props.store)
        return (
            <TemplateDasboard
                appName={Config.appName}
                title={ModuleEmpresas.title}
                description={ModuleEmpresas.descripcion}
            >
                <ModuleEmpresas/>
            </TemplateDasboard>
        )
    }
}

export default Page(Index,true);