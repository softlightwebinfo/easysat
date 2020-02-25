import React, {Component} from 'react';
import {inject, observer} from "mobx-react";
import {Config} from '../app/settings/config';
import TemplateDasboard from "../app/templates/TemplateDasboard";
import ModuleClientesDetalle from "../app/modules/clientes/ModuleClientesDetalle";

@inject('store') @observer
class Index extends Component {
    constructor(props) {
        super(props);
    }

    static async getInitialProps(ctx) {
        ModuleClientesDetalle.getInitialProps(ctx);
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
                title={ModuleClientesDetalle.title}
                description={ModuleClientesDetalle.descripcion}
            >
                <ModuleClientesDetalle/>
            </TemplateDasboard>
        )
    }
}

export default Index;