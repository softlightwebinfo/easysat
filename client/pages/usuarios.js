import React, {Component} from 'react';
import {inject, observer} from "mobx-react";
import HolaMundo from '../app/components/HolaMundo/HolaMundo.js';
import Prueba from "../app/components/Prueba/Prueba";
import {Config} from '../app/settings/config';
import TemplateDefault from "../app/templates/TemplateDefault";
import TemplateDasboard from "../app/templates/TemplateDasboard";
import ModuleUsuarios from "../app/modules/usuarios/ModuleUsuarios";
import {Page} from "../app/hocs/Page";
// import {Button} from '@codeunic/codeunic';
// import {}

@inject('store') @observer
class Index extends Component {
    constructor(props) {
        super(props);
    }

    static async getInitialProps(ctx) {
        await ModuleUsuarios.getInitialProps(ctx);
    }

    componentDidMount() {

    }

    componentWillUnmount() {
    }

    render() {
        // console.log(this.props.store)
        return (
            <TemplateDasboard
                appName={Config.appName}
                title={ModuleUsuarios.title}
                description={ModuleUsuarios.descripcion}
            >
                <ModuleUsuarios/>
            </TemplateDasboard>
        )
    }
}

export default Page(Index, true);