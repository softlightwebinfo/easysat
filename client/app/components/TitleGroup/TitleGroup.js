import React from 'react';
import PropTypes from 'prop-types';
import cx from 'bem-classnames';

let classes = {
    name: 'TitleGroup',
    modifiers: []
};
const TitleGroup = (props) => (
    <div className={cx(classes, props, props.className)}>
        <h3 className={classes.name + '__title'}>
            {props.title}
            <span className={classes.name + '__logo'}>
                {props.logo}
                <span className={classes.name + '__logo-accent'}>
                    {props.logoAccent}
                </span>
            </span>
        </h3>
        <h4 className={classes.name + '__subtitle'}>{props.subtitle}</h4>
    </div>
);
TitleGroup.propTypes = {
    title: PropTypes.string,
    logo: PropTypes.string,
    logoAccent: PropTypes.string,
    subtitle: PropTypes.string
};
export default TitleGroup;