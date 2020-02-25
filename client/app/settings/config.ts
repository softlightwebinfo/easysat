import {Setting} from "../libs/Setting";
import {version, name} from '../../package.json';

const Config = new Setting();
Config.appName = name;
Config.version = version;
Config.path.lang = '/settings/lang/';
Config.lang = 'en';
if (Config.dev) {
    Config.rutaApi = 'http://localhost:3001/';
} else {
    Config.rutaApi = 'http://localhost:3001/';
}

Config.setImagen('login', '/static/images/fondo.png');
Config.setImagen('logo', '/static/images/logo.png');
export {
    Config
};