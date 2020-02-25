import {Service} from "@codeunic/api";
import {ORM} from "../libs/ORM";
import {createJWToken, passwordCompare} from "../libs/Auth";

const moment = require('moment');

@Service
export class UserService {
    constructor() {
    }

    async login(email: string, password: string, ip: string) {
        try {
            let vecesIp = await this.vecesIp(ip);
            if (vecesIp.error) {
                return {
                    _loginError: vecesIp.veces
                };
            } else {
                return await this.hacerLogin(email, password, ip);
            }
        } catch (e) {
            return {
                _loginError: 3
            };
        }
    }

    private async vecesIp(ip: string): Promise<{ veces: number, error: boolean }> {
        let veces: number = 0;
        let error: boolean = false;
        try {
            let {fecha_login, intentos} = await ORM.db().one(`SELECT fecha_login,intentos from "Login_error" WHERE ip=$1`, [ip]);
            veces = intentos;
            if (intentos == 3) {
                var a = moment();
                var b = moment(fecha_login);
                let day = a.diff(b, 'hour');
                if (day > 0) {
                    await this.pDeleteErorLogin(ip);
                    veces = 0;
                    error = false;
                } else {
                    veces = intentos;
                    error = true;
                }
            }
            return {
                veces,
                error
            }
        } catch (e) {
            return {
                veces,
                error
            }
        }
    }

    async hacerLogin(emailLogin: string, passwordLogin: string, ip: string) {
        try {
            let {password, id, email, nombre, fk_role} = await ORM.db().one('SELECT password,id,email,nombre,fk_role from "Usuarios" where email=$1 AND banned IS NULL', [emailLogin]);
            if (id) {
                let comparePass = await passwordCompare(passwordLogin, password);
                if (comparePass) {
                    await this.pLogin(id, ip);
                    await this.pDeleteErorLogin(ip);
                    return {
                        _loginError: 0,
                        _token: await createJWToken({
                            maxAge: 3600 * 8,
                            sessionData: {
                                _id: id,
                                _email: email,
                                _nombre: nombre,
                                _fk_role: fk_role
                            }
                        }),
                        _id: id,
                        _email: email,
                        _nombre: nombre,
                        _fk_role: fk_role
                    };

                }
                else {
                    let [vecesP] = await ORM.db().query(`SELECT p_loginerror('${ip}')`);
                    return {
                        login: false,
                        _loginError: vecesP.p_loginerror
                    }
                }
            }
        } catch (e) {
            return {
                login: false
            }
        }
    }

    private async pLogin(id, ip: string) {
        try {
            await ORM.db().any('SELECT p_usuarioslogin($1,$2)', [id, ip])
        } catch (e) {

        }
    }

    private async pDeleteErorLogin(ip: string) {
        try {
            await ORM.db().any('SELECT p_loginerrordelete($1)', [ip])
        } catch (e) {

        }
    }
}

