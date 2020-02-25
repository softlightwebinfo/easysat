import React, {Component} from 'react';
import {inject, observer} from "mobx-react";
import {Config} from '../app/settings/config';
import TemplateDasboard from "../app/templates/TemplateDasboard";
import ModuleReparacionesRegistro from "../app/modules/reparaciones/ModuleReparacionesRegistro";
// import {Button} from '@codeunic/codeunic';
// import {}

@inject('store') @observer
class Index extends Component {
    constructor(props) {
        super(props);
    }

    static async getInitialProps(ctx) {
        ModuleReparacionesRegistro.getInitialProps(ctx);
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
                title={ModuleReparacionesRegistro.title}
                description={ModuleReparacionesRegistro.descripcion}
            >
                <ModuleReparacionesRegistro/>
            </TemplateDasboard>
        )
    }
}

export default Index;