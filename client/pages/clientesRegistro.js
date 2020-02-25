import React, {Component} from 'react';
import {inject, observer} from "mobx-react";
import {Config} from '../app/settings/config';
import TemplateDasboard from "../app/templates/TemplateDasboard";
import ModuleClientesRegistro from "../app/modules/clientes/ModuleClientesRegistro";

@inject('store') @observer
class Index extends Component {
    constructor(props) {
        super(props);
    }

    static async getInitialProps(ctx) {
        ModuleClientesRegistro.getInitialProps(ctx);
    }

    componentDidMount() {
        this.props.store.start()
    }

    componentWillUnmount() {
        this.props.store.stop()
    }

    render() {
        // console.log(this.props.store)
        return (
            <TemplateDasboard
                appName={Config.appName}
                title={ModuleClientesRegistro.title}
                description={ModuleClientesRegistro.descripcion}
            >
                <ModuleClientesRegistro/>
            </TemplateDasboard>
        )
    }
}

export default Index;