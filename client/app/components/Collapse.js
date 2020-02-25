import React, {Component} from 'react';
import PropTypes from 'prop-types';
import cx from 'bem-classnames';
import c from 'classnames';
class Collapse extends Component {
    constructor(props) {
        super(props);
        this.state = {
            open: props.open || false
        };
    }

    trigger(e) {
        this.setState({open: !this.state.open});
    }

    render() {
        const classes = {
            name: 'Collapse'
        };
        return (
            <div className={cx(classes, this.props, this.props.className)}>
                <div onClick={this.trigger.bind(this)} className={classes.name + '__trigger'}>{this.props.trigger}</div>
                <div className={c(classes.name + '__collapse', {
                    [`${classes.name}__collapse--open`]: this.state.open
                })}>
                    {this.props.children}
                </div>
            </div>
        );
    }
}

Collapse.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.element,
        PropTypes.array
    ]),
    className: PropTypes.string,
    trigger: PropTypes.element
}
export default Collapse;