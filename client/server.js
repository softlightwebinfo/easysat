const port = parseInt(process.env.PORT, 10) || 3000;
const dev = process.env.NODE_ENV !== 'production';
const express = require('express')
const bodyParser = require('body-parser')
const {createServer} = require('http');
const {parse} = require('url');
const next = require('next');
const mobxReact = require('mobx-react');
const app = next({dev});
const routes = require('./routes');
// const Logs = require("./app/libs/Logs.ts");
const handler = routes.getRequestHandler(app);

mobxReact.useStaticRendering(true);

app.prepare().then(() => {
    const app = express()
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended: true}));
    app.post('/api/logger', (req, res) => {
        // let log = new Logs('2018-11-20.txt');
        // console.log(log.getRuta);
        // console.log(req.body);
    });
    app.get('*', (req, res) => {
        const parsedUrl = parse(req.url, true);
        return handler(req, res, parsedUrl);
    });
    app.listen(port, err => {
        if (err) throw err;
        console.log(`ready at http://localhost:${port}`)
    })
});