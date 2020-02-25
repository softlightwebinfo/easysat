import React from 'react';
import PropTypes from 'prop-types';
import Avatar from "../components/Avatar/Avatar";
import Item from "../components/Item/Item";
import Titulo from "../components/Titulo/Titulo";
import ArrowDesplegable from "../components/Arrow/ArrowDesplegable";
import DropDown from "../components/DropDown/DropDown";
import DropDownMenu from "../components/DropDown/DropDownMenu";
import Toolbar__item from "../components/Toolbar/Toolbar__item";
import List from "../components/List/List";
import ListItem from "../components/ListItem/ListItem";
import Url from "../components/Url/Url";
import Icon from "../components/Icon/Icon";
import Texto from "../components/Texto/Texto";
import Divider from "../components/Divider/Divider";

const UserProfileDesplegable = (
    {
        nombre,
        onClickCerrarSession
    }
) => (
    <DropDown
        trigger={
            <Toolbar__item>
                <Item>
                    <Avatar style={{marginRight: 5}} src={'/static/images/avatar.png'}/>
                    <Titulo default mensaje={nombre}/>
                    <ArrowDesplegable/>
                </Item>
            </Toolbar__item>
        }
    >
        <DropDownMenu>
            <List>
                <Url route={"perfil"}>
                    <ListItem>
                        <Icon icon='lnr lnr-user'/>
                        <Texto>Mi Perfil</Texto>
                    </ListItem>
                </Url>
                {/*<ListItem>*/}
                {/*<Icon icon='lnr lnr-calendar-full'/>*/}
                {/*<Texto>Calendario</Texto>*/}
                {/*</ListItem>*/}
                {/*<ListItem>*/}
                {/*<Icon icon='lnr lnr-list'/>*/}
                {/*<Texto>Mis tareas</Texto>*/}
                {/*</ListItem>*/}
                {/*<ListItem>*/}
                {/*<Icon icon='lnr lnr-inbox'/>*/}
                {/*<Texto>Mensajes</Texto>*/}
                {/*</ListItem>*/}
                <Divider/>
                <ListItem>
                    <Icon icon='lnr lnr-cog'/>
                    <Texto>Configuración</Texto>
                </ListItem>
                <ListItem>
                    <Icon icon='lnr lnr-lock'/>
                    <Texto>Bloquear</Texto>
                </ListItem>
                <ListItem onClick={onClickCerrarSession}>
                    <Icon icon='lnr lnr-exit'/>
                    <Texto>Cerrar sesión</Texto>
                </ListItem>
            </List>
        </DropDownMenu>
    </DropDown>
);
UserProfileDesplegable.defaultProps = {
    onClickCerrarSession: () => {
    }
}
UserProfileDesplegable.propTypes = {
    onClickCerrarSession: PropTypes.func
};
export default UserProfileDesplegable;
