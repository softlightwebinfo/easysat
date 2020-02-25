import React, {Component} from 'react';
import {inject, observer} from "mobx-react";
import {Config} from '../app/settings/config';
import TemplateDasboard from "../app/templates/TemplateDasboard";
import ModuleEstadisticasGlobales from "../app/modules/estadisticasGlobales/ModuleEstadisticasGlobales";
// import {Button} from '@codeunic/codeunic';
// import {}

@inject('store') @observer
class Index extends Component {
    constructor(props) {
        super(props);
    }

    static async getInitialProps(ctx) {
        ModuleEstadisticasGlobales.getInitialProps(ctx);
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
                title={ModuleEstadisticasGlobales.title}
                description={ModuleEstadisticasGlobales.descripcion}
            >
                <ModuleEstadisticasGlobales/>
            </TemplateDasboard>
        )
    }
}

export default Index;