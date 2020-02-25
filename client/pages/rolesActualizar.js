import React, {Component} from 'react';
import {inject, observer} from "mobx-react";
import {Config} from '../app/settings/config';
import TemplateDasboard from "../app/templates/TemplateDasboard";
import ModuleRolesActualizar from "../app/modules/roles/ModuleRolesActualizar";
import {Page} from "../app/hocs/Page";
// import {Button} from '@codeunic/codeunic';
// import {}

@inject('store') @observer
class Index extends Component {
    constructor(props) {
        super(props);
    }

    static async getInitialProps(ctx) {
       await ModuleRolesActualizar.getInitialProps(ctx);
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
                title={ModuleRolesActualizar.title}
                description={ModuleRolesActualizar.descripcion}
            >
                <ModuleRolesActualizar/>
            </TemplateDasboard>
        )
    }
}

export default Page(Index, true);