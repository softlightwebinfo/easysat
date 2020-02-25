import App, {Container} from 'next/app'
import React from 'react'
import 'antd/dist/antd.css';
import "../app/scss/style.scss";
// import "@codeunic/codeunic/build/index.css";
import {Provider} from "mobx-react";
import withMobxStore from '../app/libs/with-mobx-store';

class MyApp extends App {
    static async getInitialProps({Component, ctx}) {
        let pageProps = {};

        if (Component.getInitialProps) {
            pageProps = await Component.getInitialProps(ctx)
        }
        const hasQuery = Object.keys(ctx.query).length != 0;
        const isServer = !!ctx.req;
        var modules = [];

        return {isServer, pageProps}
    }

    constructor(props) {
        super(props)
    }

    render() {
        const {Component, pageProps, mobxStore} = this.props;
        return (
            <Container>
                <Provider store={mobxStore}>
                    <Component {...pageProps} />
                </Provider>
            </Container>
        );
    }
}

export default withMobxStore(MyApp)
