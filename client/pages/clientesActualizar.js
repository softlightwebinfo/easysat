import React, {Component} from 'react';
import {inject, observer} from "mobx-react";
import {Config} from '../app/settings/config';
import TemplateDasboard from "../app/templates/TemplateDasboard";
import ModuleClientesActualizar from "../app/modules/clientes/ModuleClientesActualizar";
import {Page} from "../app/hocs/Page";

@inject('store') @observer
class Index extends Component {
    constructor(props) {
        super(props);
    }

    static async getInitialProps(ctx) {
        await ModuleClientesActualizar.getInitialProps(ctx);
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
                title={ModuleClientesActualizar.title}
                description={ModuleClientesActualizar.descripcion}
            >
                <ModuleClientesActualizar/>
            </TemplateDasboard>
        )
    }
}

export default Page(Index, true);