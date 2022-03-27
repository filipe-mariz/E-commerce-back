require("dotenv").config({
    path: process.env.NODE_ENV === "test" ? ".env.test" : ".env"
});

import express, { json } from "express";

class AppController {
    constructor() {
        this.express = express();

        this.middlewares();
        this.routes();
    }

    middlewares() {
        this.express.use(json());
    }

    routes() {
        this.express.use(require("./routes"));
    }
}

export default new AppController().express;