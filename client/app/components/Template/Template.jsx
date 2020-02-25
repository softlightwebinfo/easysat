import React, {Component} from 'react';
import Head from 'next/head';
import PropTypes from 'prop-types';

class Template extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div id="wrapper">
                <Head>
                    <title>{this.props.title} | {this.props.appName}</title>
                    <meta name="description" content={this.props.description}/>
                </Head>
                {this.props.children}
            </div>
        );
    }
}

Template.propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    appName: PropTypes.string.isRequired
};
export default Template;