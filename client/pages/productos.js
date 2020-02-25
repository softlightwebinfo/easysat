import React, {Component} from 'react';
import {inject, observer} from "mobx-react";
import {Config} from '../app/settings/config';
import TemplateDasboard from "../app/templates/TemplateDasboard";
import ModuleProductos from "../app/modules/productos/ModuleProductos";
import {Page} from "../app/hocs/Page";
// import {Button} from '@codeunic/codeunic';
// import {}

@inject('store') @observer
class Index extends Component {
    constructor(props) {
        super(props);
    }

    static async getInitialProps(ctx) {
        await ModuleProductos.getInitialProps(ctx);
    }


    render() {
        // console.log(this.props.store)
        return (
            <TemplateDasboard
                appName={Config.appName}
                title={ModuleProductos.title}
                description={ModuleProductos.descripcion}
            >
                <ModuleProductos/>
            </TemplateDasboard>
        )
    }
}

export default Page(Index,true);