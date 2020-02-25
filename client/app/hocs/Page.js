import {parseCookies, setCookie, destroyCookie} from 'nookies'
import objectAssign from 'object-assign';
import {Router} from '../../routes';
import {inject, observer} from 'mobx-react';
import Cookies from 'js-cookie';

@inject('store')
@observer
export function Page(WrappedComponent, auth = false) {
    return class extends React.Component {
        static async getInitialProps(ctx) {
            let {user} = parseCookies(ctx);
            if (user) {
                user = JSON.parse(user);
                ctx.mobxStore.Auth.startCookieLogin(user);
            }
            let data = await WrappedComponent.getInitialProps(ctx);
            if (auth) {
                if (!ctx.mobxStore.Auth.isLogin) {
                    if (ctx.res) {
                        ctx.res.writeHead(302, {
                            Location: '/login'
                        });
                        ctx.res.end();
                        destroyCookie('user');
                    } else {
                        Router.pushRoute('login');
                        ctx.mobxStore.Auth.logout();
                    }
                }

            }
            return data;
        }

        constructor(props) {
            super(props);
        }

        componentDidMount() {

        }

        componentWillUnmount() {

        }

        componentWillReceiveProps(props) {
            if (!props.store.Auth.isLogin) {
                Router.pushRoute('login');
                props.store.Auth.logout();
            }
        }

        render() {
            return <WrappedComponent {...this.props} />;
        }
    };
}