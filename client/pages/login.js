import React, {Component} from 'react';
import Template from "../app/components/Template/Template";
import {Config} from "../app/settings/config";
import {inject, observer} from "mobx-react/index";
import Fondo from "../app/components/Fondo";
import LoginContainer from "../app/containers/LoginContainer";
import {Page} from "../app/hocs/Page";
import {Router} from "../routes";

@inject('store') @observer
class login extends Component {
    constructor(props) {
        super(props);
    }

    static async getInitialProps(ctx) {
        if (ctx.mobxStore.Auth.isLogin) {
            if (ctx.res) {
                ctx.res.writeHead(302, {
                    Location: '/'
                });
                ctx.res.end();
            } else {
                Router.pushRoute('index');
            }
        }
        return {};
    }

    render() {
        if (this.props.store.Auth.isLogin) {
            Router.pushRoute('index');
        }
        return (
            <Template
                appName={Config.appName}
                title={`Inicia session en nuestra aplicación`}
                description={`Descripcion de la pagina web principal`}
            >
                <Fondo fondo={Config.getImages().login}>
                    <LoginContainer/>
                </Fondo>
            </Template>
        );
    }
}

export default Page(login);