import 'dotenv';
import express from 'express';

class AppController {
    constructor() {
        this.express = express();

        this.middlewares();
        this.routes();
    };

    middlewares() {
        this.express.use(express.json());
    };

    routes() {
        this.express.use('./routes');
    }
};

export default new AppController().express;