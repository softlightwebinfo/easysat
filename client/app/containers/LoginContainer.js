import React, {Component} from 'react';
import {inject, observer} from 'mobx-react';
import LoginLayout from "../layouts/LoginLayout";

@inject('store') @observer
class LoginContainer extends Component {
    constructor(props) {
        super(props);
    }

    async onSubmit(e, datos) {
        e.preventDefault();
        let {
            email,
            password
        } = datos;
        let {Auth} = this.props.store;
        await Auth.login(email, password)
    }

    render() {
        return (
            <LoginLayout
                onSubmit={this.onSubmit.bind(this)}
            />
        );
    }
}

export default LoginContainer;