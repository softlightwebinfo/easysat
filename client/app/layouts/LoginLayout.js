import React, {Component} from 'react';
import Wrapper from "../components/Wrapper/Wrapper";
import Card from "../components/Card/Card";
import TitleGroup from "../components/TitleGroup/TitleGroup";
import Input from "../components/Input/Input";
import InputGroup from "../components/InputGroup";
import FormGroup from "../components/FormGroup/FormGroup";
import Label from "../components/Label/Label";
import Btn from "../components/Btn/Btn";
import Buttons from "../components/Buttons/Buttons";
import Or from "../components/Or/Or";
import {Link} from '../../routes';
import Form from "../components/Form/Form";
import PropTypes from 'prop-types';
import Error from "../components/Error/Error";
import Loader from "../components/Loader/Loader";
import {inject, observer} from "mobx-react/index";
@inject('store')
@observer
class LoginLayout extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            errorEmail: false,
            errorPassword: false
        };
    }

    onSubmit(e) {
        let error = 0;
        let errorPassword = false;
        let errorEmail = false;
        if (!this.state.email.trim().length) {
            errorEmail = true;
            error++;
        }
        if (!this.state.password.trim().length) {
            errorPassword = true;
            error++;
        }
        this.setState({
            errorEmail: errorEmail,
            errorPassword: errorPassword
        });
        if (!error) {
            this.props.onSubmit(e, {
                email: this.state.email,
                password: this.state.password
            });
        } else {
            e.preventDefault();
        }
    }

    render() {
        return (
            <Wrapper>
                <Card>
                    <Form
                        method="POST"
                        onSubmit={this.onSubmit.bind(this)}
                    >
                        <TitleGroup
                            title={"Bienvenido"}
                            logo="Easy"
                            logoAccent="SAT"
                            subtitle={"Start your business easily"}
                        />
                        <FormGroup>
                            <Label text="Correo electrónico"/>
                            <InputGroup>
                                <Input
                                    name="email"
                                    type="email"
                                    value={this.state.email}
                                    onChange={e => this.setState({email: e.target.value})}
                                    color="white"
                                    placeholder="Correo electronico"
                                />
                            </InputGroup>
                            {this.state.errorEmail && (<Error mensaje="El email no puede estar vacio!"/>)}
                        </FormGroup>
                        <FormGroup>
                            <Label text="Contraseña"/>
                            <InputGroup>
                                <Input
                                    value={this.state.password}
                                    onChange={e => this.setState({password: e.target.value})}
                                    color="white"
                                    type={'password'}
                                    placeholder="Contraseña"
                                />
                                {this.state.errorPassword && (<Error mensaje="La contraseña no puede estar vacia!"/>)}
                            </InputGroup>
                        </FormGroup>
                        <FormGroup>
                            <Buttons>
                                {this.props.store.Auth.loader ? (<Loader/>) : (
                                    <Btn
                                        onClick={this.props.login}
                                        type={'primary'}
                                        btnType="submit"
                                        value="Iniciar sesión"
                                    />
                                )}
                            </Buttons>
                        </FormGroup>
                        <Or mensaje={"Or Easily Using"}/>
                    </Form>
                </Card>
            </Wrapper>
        );
    }
}

LoginLayout.defaultProps = {
    onSubmit: () => {
    }
};
LoginLayout.propTypes = {
    onSubmit: PropTypes.func
};
export default LoginLayout;