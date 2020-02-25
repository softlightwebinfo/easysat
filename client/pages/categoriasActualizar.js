import React, {Component} from 'react';
import {inject, observer} from "mobx-react";
import {Config} from '../app/settings/config';
import TemplateDasboard from "../app/templates/TemplateDasboard";
import ModuleCategoriasActualizar from "../app/modules/categorias/ModuleCategoriasActualizar";
import {Page} from "../app/hocs/Page";
// import {Button} from '@codeunic/codeunic';
// import {}

@inject('store') @observer
class Index extends Component {
    constructor(props) {
        super(props);
    }

    static async getInitialProps(ctx) {
        await ModuleCategoriasActualizar.getInitialProps(ctx);
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
                title={ModuleCategoriasActualizar.title}
                description={ModuleCategoriasActualizar.descripcion}
            >
                <ModuleCategoriasActualizar/>
            </TemplateDasboard>
        )
    }
}

export default Page(Index, true);