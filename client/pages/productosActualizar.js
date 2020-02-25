import React, {Component} from 'react';
import {inject, observer} from "mobx-react";
import {Config} from '../app/settings/config';
import TemplateDasboard from "../app/templates/TemplateDasboard";
import ModuleProductosActualizar from "../app/modules/productos/ModuleProductosActualizar";
import {Page} from "../app/hocs/Page";
// import {Button} from '@codeunic/codeunic';
// import {}

@inject('store') @observer
class Index extends Component {
    constructor(props) {
        super(props);
    }

    static async getInitialProps(ctx) {
        await  ModuleProductosActualizar.getInitialProps(ctx);
    }

    render() {
        // console.log(this.props.store)
        return (
            <TemplateDasboard
                appName={Config.appName}
                title={ModuleProductosActualizar.title}
                description={ModuleProductosActualizar.descripcion}
            >
                <ModuleProductosActualizar/>
            </TemplateDasboard>
        )
    }
}

export default Page(Index, true);