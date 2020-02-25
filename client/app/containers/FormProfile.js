import React, {Component} from 'react';
import PropTypes from 'prop-types';
import FormGroup from "../components/FormGroup/FormGroup";
import Label from "../components/Label/Label";
import Input from "../components/Input/Input";
import Divider from "../components/Divider/Divider";
import Btn from "../components/Btn/Btn";


class FormProfile extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    onSubmit(e) {

    }

    render() {
        return (
            <form
                onSubmit={this.onSubmit.bind(this)}
            >
                <FormGroup>
                    <Label>Email</Label>
                    <Input
                        name={'email'}
                        placeholder="Email"
                    />
                </FormGroup>
                <FormGroup>
                    <Label>Contraseña</Label>
                    <Input
                        name={'password'}
                        placeholder="Contraseña"
                    />
                </FormGroup>
                <Divider/>
                <FormGroup>
                    <Label>Empresa</Label>
                    <Input
                        name={'empresa'}
                        placeholder="Empresa"
                    />
                </FormGroup>
                <FormGroup>
                    <Label>Telefono</Label>
                    <Input
                        name={'telefono'}
                        placeholder="Telefono"
                    />
                </FormGroup>
                <Btn
                    type='primary'
                    outline
                    btnType={"submit"}
                >
                    Guardar datos
                </Btn>
            </form>
        );
    }
}

FormProfile.propTypes = {};
export default FormProfile;