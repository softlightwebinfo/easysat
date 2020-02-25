import React, {Component} from "react";
import PropTypes from 'prop-types';
import cx from 'bem-classnames';
import {withRouter} from 'next/router'
import {inject, observer} from "mobx-react";

const classes = {
    name: 'TemplateDashboard',
    modifiers: []
};
import Template from "../components/Template/Template";
import {
    DashboardFooter,
    DashboardAside,
    DashboardBody,
    DashboardHeader,
    DashboardLayout
} from "../components/Dashboard";
import {
    Toolbar__left,
    Toolbar__right,
    Toolbar,
    Toolbar__button
} from "../components/Toolbar";
import Navbar from "../components/Navbar/Navbar";
import IconMenu from "../components/icons/IconMenu";
import Toolbar__logo from "../components/Toolbar/Toolbar__logo";
import ToolbarLogo from "../layouts/ToolbarLogo";
import Toolbar__collapse from "../components/Toolbar/Toolbar__collapse";
import UserProfileDesplegable from "../layouts/UserProfileDesplegable";
import List from "../components/List/List";
import ListItem from "../components/ListItem/ListItem";
import Url from "../components/Url/Url";
import Icon from "../components/Icon/Icon";
import Texto from "../components/Texto/Texto";
import DashboardAsideBlock from "../components/Dashboard/DashboardAsideBlock";
import Collapse from "../components/Collapse";
import Group from "../components/Group/Group";

@inject('store')
@observer
class TemplateDasboard extends Component {
    constructor(props) {
        super(props);
    }

    onClickCerrarSession() {
        this.props.store.Auth.logout();
    }

    toolbar() {
        const Auth = this.props.store.Auth;
        // console.log(this.props);
        return (
            <Navbar>
                <Toolbar>
                    <Toolbar__left>
                        <Toolbar__button desktop><IconMenu/></Toolbar__button>
                        <Toolbar__button mobile><IconMenu/></Toolbar__button>
                        <Toolbar__logo>
                            <ToolbarLogo/>
                        </Toolbar__logo>
                    </Toolbar__left>
                    <Toolbar__right style={{marginRight: 15}}>
                        <UserProfileDesplegable
                            nombre={Auth.User.nombre}
                            onClickCerrarSession={this.onClickCerrarSession.bind(this)}
                        />
                        <Toolbar__collapse></Toolbar__collapse>
                    </Toolbar__right>
                </Toolbar>
            </Navbar>
        );
    }

    render() {
        return (
            <Template
                title={this.props.title}
                description={this.props.description}
                appName={this.props.appName}
            >
                <DashboardLayout>
                    <DashboardHeader>
                        {this.toolbar()}
                    </DashboardHeader>
                    <DashboardAside>
                        <DashboardAsideBlock>
                            <List>
                                <Url route={'index'}>
                                    <ListItem>
                                        <Icon icon="lnr lnr-home"/>
                                        <Texto>Dashboard Home</Texto>
                                    </ListItem>
                                </Url>
                                <Url route={'perfil'}>
                                    <ListItem>
                                        <Icon icon="lnr lnr-user"/>
                                        <Texto>Perfil</Texto>
                                    </ListItem>
                                </Url>
                            </List>
                        </DashboardAsideBlock>
                        <DashboardAsideBlock>
                            <List>
                                <Collapse
                                    open={['/usuarios', '/usuariosRegistro'].indexOf(this.props.router.route) != -1}
                                    trigger={
                                        <ListItem active={['/usuarios', '/usuariosRegistro'].indexOf(this.props.router.route) != -1}>
                                            <Group>
                                                <Group>
                                                    <Icon icon="lnr lnr-user"/>
                                                    <Texto>Usuarios</Texto>
                                                </Group>
                                                <Icon icon="lnr lnr-chevron-down"/>
                                            </Group>
                                        </ListItem>
                                    }
                                >
                                    <Url route={'usuarios'}>
                                        <ListItem active={this.props.router.route == '/usuarios'}>
                                            <Icon icon="lnr lnr-arrow-right-circle"/>
                                            <Texto>Lista de usuarios</Texto>
                                        </ListItem>
                                    </Url>
                                    <Url route={'usuariosRegistro'}>
                                        <ListItem active={this.props.router.route == '/usuariosRegistro'}>
                                            <Icon icon="lnr lnr-arrow-right-circle"/>
                                            <Texto>Registrar usuario</Texto>
                                        </ListItem>
                                    </Url>
                                </Collapse>
                                <Collapse
                                    open={['/productos', '/productosRegistro'].indexOf(this.props.router.route) != -1}
                                    trigger={
                                        <ListItem active={['/productos', '/productosRegistro'].indexOf(this.props.router.route) != -1}>
                                            <Group>
                                                <Group>
                                                    <Icon icon="lnr lnr-home"/>
                                                    <Texto>Productos</Texto>
                                                </Group>
                                                <Icon icon="lnr lnr-chevron-down"/>
                                            </Group>
                                        </ListItem>
                                    }
                                >
                                    <Url route={'productos'}>
                                        <ListItem active={this.props.router.route == '/productos'}>
                                            <Icon icon="lnr lnr-arrow-right-circle"/>
                                            <Texto>Lista de productos</Texto>
                                        </ListItem>
                                    </Url>
                                    <Url route={'productosRegistro'}>
                                        <ListItem active={this.props.router.route == '/productosRegistro'}>
                                            <Icon icon="lnr lnr-arrow-right-circle"/>
                                            <Texto>Registrar nuevo producto</Texto>
                                        </ListItem>
                                    </Url>
                                </Collapse>
                                <Collapse
                                    open={['/categorias', '/categoriasRegistro'].indexOf(this.props.router.route) != -1}
                                    trigger={
                                        <ListItem active={['/categorias', '/categoriasRegistro'].indexOf(this.props.router.route) != -1}>
                                            <Group>
                                                <Group>
                                                    <Icon icon="lnr lnr-home"/>
                                                    <Texto>Categorias</Texto>
                                                </Group>
                                                <Icon icon="lnr lnr-chevron-down"/>
                                            </Group>
                                        </ListItem>
                                    }
                                >
                                    <Url route={'categorias'}>
                                        <ListItem active={this.props.router.route == '/categorias'}>
                                            <Icon icon="lnr lnr-arrow-right-circle"/>
                                            <Texto>Lista de categorias</Texto>
                                        </ListItem>
                                    </Url>
                                    <Url route={'categoriasRegistro'}>
                                        <ListItem active={this.props.router.route == '/categoriasRegistro'}>
                                            <Icon icon="lnr lnr-arrow-right-circle"/>
                                            <Texto>Registrar nueva categoria</Texto>
                                        </ListItem>
                                    </Url>
                                </Collapse>
                                <Collapse
                                    open={['/roles', '/rolesRegistro', '/rolesActualizar'].indexOf(this.props.router.route) != -1}
                                    trigger={
                                        <ListItem active={['/roles', '/rolesRegistro', '/rolesActualizar'].indexOf(this.props.router.route) != -1}>
                                            <Group>
                                                <Group>
                                                    <Icon icon="lnr lnr-home"/>
                                                    <Texto>Roles(Cargos)</Texto>
                                                </Group>
                                                <Icon icon="lnr lnr-chevron-down"/>
                                            </Group>
                                        </ListItem>
                                    }
                                >
                                    <Url route={'roles'}>
                                        <ListItem active={this.props.router.route == '/roles'}>
                                            <Icon icon="lnr lnr-arrow-right-circle"/>
                                            <Texto>Lista de roles</Texto>
                                        </ListItem>
                                    </Url>
                                    <Url route={'rolesRegistro'}>
                                        <ListItem active={this.props.router.route == '/rolesRegistro'}>
                                            <Icon icon="lnr lnr-arrow-right-circle"/>
                                            <Texto>Registrar nuevo role</Texto>
                                        </ListItem>
                                    </Url>
                                </Collapse>
                                <Collapse
                                    open={['/clientes', '/clientesRegistro', '/clientesActualizar', '/clientesDetalle'].indexOf(this.props.router.route) != -1}
                                    trigger={
                                        <ListItem active={['/clientes', '/clientesRegistro', '/clientesActualizar', '/clientesDetalle'].indexOf(this.props.router.route) != -1}>
                                            <Group>
                                                <Group>
                                                    <Icon icon="lnr lnr-home"/>
                                                    <Texto>Clientes</Texto>
                                                </Group>
                                                <Icon icon="lnr lnr-chevron-down"/>
                                            </Group>
                                        </ListItem>
                                    }
                                >
                                    <Url route={'clientes'}>
                                        <ListItem active={this.props.router.route == '/clientes'}>
                                            <Icon icon="lnr lnr-arrow-right-circle"/>
                                            <Texto>Lista de clientes</Texto>
                                        </ListItem>
                                    </Url>
                                    <Url route={'clientesRegistro'}>
                                        <ListItem active={this.props.router.route == '/clientesRegistro'}>
                                            <Icon icon="lnr lnr-arrow-right-circle"/>
                                            <Texto>Registrar nuevo cliente</Texto>
                                        </ListItem>
                                    </Url>
                                </Collapse>
                                <Collapse
                                    open={['/empresas', '/empresasRegistro', '/empresasActualizar', '/empresasDetalle'].indexOf(this.props.router.route) != -1}
                                    trigger={
                                        <ListItem active={['/clientes', '/clientesRegistro', '/clientesActualizar', '/clientesDetalle'].indexOf(this.props.router.route) != -1}>
                                            <Group>
                                                <Group>
                                                    <Icon icon="lnr lnr-home"/>
                                                    <Texto>Empresas</Texto>
                                                </Group>
                                                <Icon icon="lnr lnr-chevron-down"/>
                                            </Group>
                                        </ListItem>
                                    }
                                >
                                    <Url route={'empresas'}>
                                        <ListItem active={this.props.router.route == '/empresas'}>
                                            <Icon icon="lnr lnr-arrow-right-circle"/>
                                            <Texto>Lista de empresas</Texto>
                                        </ListItem>
                                    </Url>
                                    <Url route={'empresasRegistro'}>
                                        <ListItem active={this.props.router.route == '/empresasRegistro'}>
                                            <Icon icon="lnr lnr-arrow-right-circle"/>
                                            <Texto>Registrar nueva empresa</Texto>
                                        </ListItem>
                                    </Url>
                                </Collapse>
                                <Url route={'estadisticas'}>
                                    <ListItem active={this.props.router.route == '/estadisticas'}>
                                        <Group>
                                            <Icon icon="lnr lnr-arrow-right-circle"/>
                                            <Texto>Estadisticas</Texto>
                                        </Group>
                                    </ListItem>
                                </Url>
                            </List>
                        </DashboardAsideBlock>
                        {/*<DashboardAsideBlock>*/}
                        {/*<List>*/}
                        {/*<Collapse*/}
                        {/*open={['/reparaciones', '/reparacionesRegistro'].indexOf(this.props.router.route) != -1}*/}
                        {/*trigger={*/}
                        {/*<ListItem active={['/reparaciones', '/reparacionesRegistro'].indexOf(this.props.router.route) != -1}>*/}
                        {/*<Group>*/}
                        {/*<Group>*/}
                        {/*<Icon icon="lnr lnr-user"/>*/}
                        {/*<Texto>Reparaciones</Texto>*/}
                        {/*</Group>*/}
                        {/*<Icon icon="lnr lnr-chevron-down"/>*/}
                        {/*</Group>*/}
                        {/*</ListItem>*/}
                        {/*}*/}
                        {/*>*/}
                        {/*<Url route={'reparaciones'}>*/}
                        {/*<ListItem active={this.props.router.route == '/reparaciones'}>*/}
                        {/*<Icon icon="lnr lnr-arrow-right-circle"/>*/}
                        {/*<Texto>Lista de reparaciones</Texto>*/}
                        {/*</ListItem>*/}
                        {/*</Url>*/}
                        {/*<Url route={'reparacionesRegistro'}>*/}
                        {/*<ListItem active={this.props.router.route == '/reparacionesRegistro'}>*/}
                        {/*<Icon icon="lnr lnr-arrow-right-circle"/>*/}
                        {/*<Texto>Nueva Reparación</Texto>*/}
                        {/*</ListItem>*/}
                        {/*</Url>*/}
                        {/*</Collapse>*/}
                        {/*<Url route={'estadisticasGlobales'}>*/}
                        {/*<ListItem active={this.props.router.route == '/estadisticasGlobales'}>*/}
                        {/*<Group>*/}
                        {/*<Icon icon="lnr lnr-arrow-right-circle"/>*/}
                        {/*<Texto>Estadisticas Globales</Texto>*/}
                        {/*</Group>*/}
                        {/*</ListItem>*/}
                        {/*</Url>*/}
                        {/*</List>*/}
                        {/*</DashboardAsideBlock>*/}
                    </DashboardAside>
                    <DashboardBody>
                        {this.props.children}
                    </DashboardBody>
                    <DashboardFooter></DashboardFooter>
                </DashboardLayout>
            </Template>
        );
    }
}

TemplateDasboard.propTypes = {
    title: PropTypes.string,
    description: PropTypes.string,
    appName: PropTypes.string
};
TemplateDasboard.defaultProps = {};

export default withRouter(TemplateDasboard);