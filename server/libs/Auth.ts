// import jwt from 'jsonwebtoken'
const jwt = require('jsonwebtoken');
import {JWT_SECRET} from "../settings/conf";

var bcrypt = require('bcrypt');

export function verifyJWTToken(token) {
    return new Promise((resolve, reject) => {
        jwt.verify(token, JWT_SECRET, (err, decodedToken) => {
            if (err || !decodedToken) {
                return reject(err)
            }

            resolve(decodedToken)
        })
    })
}

export async function createJWToken(details: { maxAge: number, sessionData: object }) {
    // if (typeof details !== 'object') {
    //     details = {}
    // }

    if (!details.maxAge || typeof details.maxAge !== 'number') {
        details.maxAge = 3600
    }

    let token = await jwt.sign({
        data: details.sessionData
    }, JWT_SECRET, {
        expiresIn: details.maxAge,
        algorithm: 'HS256'
    });

    return token
}

export async function passwordGenerate(password) {
    return await bcrypt.hash(password, 10);
}

export async function passwordCompare(password, hash) {
    return await bcrypt.compare(password, hash);
}