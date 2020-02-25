import React from 'react';
import PropTypes from 'prop-types';
import cx from 'bem-classnames';
import Card__body from "../components/Card/Card__body";
import Card from "../components/Card/Card";
import Col from "../components/Grid/Col";
import Row from "../components/Grid/Row";
import Avatar from "../components/Avatar/Avatar";
import TituloGrupo from "../components/TituloGrupo/TituloGrupo";
import Texto from "../components/Texto/Texto";

const ProfileCard = ({children, avatar, nombre, role, email, telefono, style, className, ...props}) => (
    <Card default className={'ProfileCard'}>
        <Card__body>
            <Row className={'ProfileCard__row'}>
                <Col style={{flex: 'inherit'}}>
                    <Avatar className={"ProfileCard__avatar"} grande src={avatar}/>
                </Col>
                <Col>
                    <TituloGrupo
                        titulo={nombre}
                        subtitulo={role}
                    />
                    <Texto>{email}</Texto>
                    <Texto>{telefono}</Texto>
                </Col>
            </Row>
        </Card__body>
    </Card>
);
ProfileCard.propTypes = {};
export default ProfileCard;