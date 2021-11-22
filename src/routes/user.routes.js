import { Router } from 'express';
import UserController from '../app/controller/user';

const setup = () => {
    const router = new Router();

    router.post('/', UserController.create);
    router.get('/', UserController.read);
    router.put('/:id', UserController.put);
    router.delete('/:id', UserController.delete);

    return router;
}

return {setup};