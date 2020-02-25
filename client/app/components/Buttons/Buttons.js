import React, {Component} from 'react';
import PropTypes from 'prop-types';
import cx from 'bem-classnames';

class Buttons extends Component {
    render() {
        let {
            children,
            className,
            style,
            ...props
        } = this.props;
        const classes = {
            name: 'Buttons',
            modifiers: [
                'center'
            ]
        };
        return (
            <div
                style={style}
                className={cx(classes, props, className)}>
                {children}
            </div>
        );

    }
}

Buttons.propTypes = {
    center: PropTypes.bool,
    style: PropTypes.object
};
Buttons.defaultProps = {};
export default Buttons;