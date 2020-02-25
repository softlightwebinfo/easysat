import React from 'react';
import PropTypes from 'prop-types';
import {Config} from "../settings/config";
import Item from "../components/Item/Item";
import ItemImagen from "../components/ItemImagen/ItemImagen";
import ItemGroup from "../components/ItemGroup/ItemGroup";
import Titulo from "../components/Titulo/Titulo";
import Subtitulo from "../components/Subtitulo/Subtitulo";

const ToolbarLogo = ({className, ...props}) => (
    <Item>
        <ItemImagen
            src={Config.getImages().logo}
        />
        <ItemGroup>
            <Titulo mensaje={Config.appName}/>
            <Subtitulo mensaje={"Profesional admin"}/>
        </ItemGroup>
    </Item>
);
ToolbarLogo.propTypes = {
    className: PropTypes.string
};
export default ToolbarLogo;