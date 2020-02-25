import React, {Component} from 'react';
import PropTypes from 'prop-types';
import cx from 'bem-classnames';
import {inject, observer} from "mobx-react/index";

@inject('store') @observer
class HolaMundo extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    componentDidMount() {
        setInterval(() => {
            this.props.store.Languaje.lang == 'es' ? this.props.store.Languaje.changeLang('en') : this.props.store.Languaje.changeLang('es');
        }, 5000);
    }

    render() {
        const t = this.props.store.Languaje;
        return (
            <>
                <h1>{t.translate('header.titulo')}:{this.props.light ? "si" : "no"}</h1>
            </>
        );
    }
}

HolaMundo.defaultProps = {};
HolaMundo.propTypes = {
    light: PropTypes.bool
};
export default HolaMundo;