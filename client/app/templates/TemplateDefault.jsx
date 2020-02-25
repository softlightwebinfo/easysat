import React, {PureComponent} from 'react';
import Template from "../components/Template/Template";

class TemplateDefault extends PureComponent {
    render() {
        return (
            <Template title={this.props.title} description={this.props.description} appName={this.props.appName}>
                <main>
                    <header></header>
                    <section>
                        <aside></aside>
                        <section>
                            {this.props.children}
                        </section>
                    </section>
                    <footer></footer>
                </main>
            </Template>
        );
    }
}

export default TemplateDefault;