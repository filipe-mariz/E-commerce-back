require("dotenv").config({
    path: process.env.NODE_ENV === "test" ? ".env.test" : ".env"
});

import express, { json } from "express";
import Routes from './routes';

class AppController {
    constructor() {
        this.express = express();

        this.routesa = new Routes()

        this.middlewares();
        // this.routes();
    };

    middlewares() {
        this.express.use(json());
    };

    routes() {
        this.express.use(this.routesa);
    };
}

export default AppController;