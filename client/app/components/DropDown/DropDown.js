import React, {Component} from 'react';
import PropTypes from 'prop-types';
import cx from 'bem-classnames';
import c from 'classnames';
const classes = {
    name: 'DropDown'
};

class DropDown extends Component {
    constructor(props) {
        super(props);
        this.state = {
            open: props.open || false
        };

        this.setWrapperRef = this.setWrapperRef.bind(this);
        this.handleClickOutside = this.handleClickOutside.bind(this);
    }

    componentDidMount() {
        document.addEventListener('mousedown', this.handleClickOutside);
    }

    componentWillUnmount() {
        document.removeEventListener('mousedown', this.handleClickOutside);
    }

    setWrapperRef(node) {
        this.wrapperRef = node;
    }

    handleClickOutside(event) {
        if (this.wrapperRef && !this.wrapperRef.contains(event.target)) {
            this.setState({open: false});
        }
    }

    trigger() {
        this.setState({open: !this.state.open});
    }

    render() {
        let {className, children, trigger, ...props} = this.props;
        return (
            <div
                ref={this.setWrapperRef}
                className={cx(classes, props, className)}>
                <div onClick={this.trigger.bind(this)} className={classes.name + '__trigger'}>
                    {trigger}
                </div>
                <div className={c(classes.name + '__menu', {
                    [classes.name + '__menu--open']: this.state.open
                })}>
                    {children}
                </div>
            </div>
        );
    }
}

DropDown.propTypes = {
    className: PropTypes.string,
    children: PropTypes.oneOfType([
        PropTypes.element,
        PropTypes.array
    ]),
    trigger: PropTypes.element,
    open: PropTypes.bool
}
export default DropDown;