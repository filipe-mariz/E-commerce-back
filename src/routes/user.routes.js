import { Router } from 'express';
import UserController from '../app/controller/user';
import SchemaValidate from '../app//validators/utils/schema-validate';
import UserSchema from '../app/validators/schema/userSchema';

const setup = () => {
    const router = new Router();

    router.post('/', SchemaValidate.validate(UserSchema.create), UserController.createAction);
    router.get('/:id?', SchemaValidate.validate(UserSchema.find), UserController.readAction);
    router.put('/:id', SchemaValidate.validate(UserSchema.update), UserController.updateAction);
    router.delete('/:id', SchemaValidate.validate(UserSchema.find), UserController.deleteAction);

    return router;
}

return { setup };