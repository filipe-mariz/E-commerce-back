import { Router } from 'express';
import UserController from '../app/controller/user';
import SchemaValidate from '../app//validators/utils/schema-validate';
import UserSchema from '../app/validators/schema/userSchema';
import routes from './products.routes';

const routes = new Router();

routes.post('/', SchemaValidate.validate(UserSchema.create), UserController.createAction);
routes.get('/:id?', SchemaValidate.validate(UserSchema.find), UserController.readAction);
routes.put('/:id', SchemaValidate.validate(UserSchema.update), UserController.updateAction);
routes.delete('/:id', SchemaValidate.validate(UserSchema.find), UserController.deleteAction);

export { routes };