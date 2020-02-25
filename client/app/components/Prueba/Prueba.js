import React, {Component} from 'react';
import {Button} from 'antd';

export default class Prueba extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <Button>Hola button</Button>
            </div>
        );
    }
}