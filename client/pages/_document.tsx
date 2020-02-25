import Document, {Head, Main, NextScript} from 'next/document'
import fs from 'fs';
import {observable} from "mobx";

var readDir = false;
export default class MyDocument extends Document {

    static async getInitialProps(ctx) {
        const initialProps = await Document.getInitialProps(ctx);
        // var modules;
        if (!readDir) {
             // modules = new Promise((resolve, reject) => {
             //    fs.readdir('./app/modules', (err, items) => {
             //        readDir = true;
             //        resolve(items);
             //    });
            // });
        }
        return {
            ...initialProps
        }
    }

    render() {
        return (
            <html>
            <Head>
                <link rel="stylesheet" href="/_next/static/style.css"/>
                <link rel="stylesheet" href="//cdn.linearicons.com/free/1.0.0/icon-font.min.css"/>
            </Head>
            <body className="Body Theme-light">
            <Main/>
            <NextScript/>
            </body>
            </html>
        )
    }
}