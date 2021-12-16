import  UserService  from '../services/user';
import HandleApi from '../../errors/handle-api';

export default new class UserController {
	async createAction(req, res) {
		try {
			const response = await UserService.add(...req.body)

			return HandleApi.handleResponse(req, response);
		} catch (error) {
			return HandleApi.handleError(req, res, error);
		}
	}

	async readAction (req, res) {
		try {
			const filter = req.filter.id;

			const action = filter ? 'find' : 'listAll';
			const response = await UserService[action](filter);

			return HandleApi.handleResponse(req, response);
		} catch (error) {
			return HandleApi.handleError(req, res, error);
		}
	}

	async updateAction (req, res) {
		try {
			const filter = req.filter.id;
			const changes = req.data;

			const response = await UserService.update(filter, changes);

			return HandleApi.handleResponse(req, response);
		} catch (error) {
			return HandleApi.handleError(req, res, error);
		}
	}

	async deleteAction (req, res) {
		try {
			const filter = req.filter.id

			await UserService.delete(filter);

			return HandleApi.handleResponse(res, response);
		} catch (error) {
			return HandleApi.handleError(req, res, error);
		}
	}
}
