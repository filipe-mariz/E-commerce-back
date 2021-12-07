import  UserService  from '../services/user';

class UserController {
	async create(req, res) {
		try {
			const response = await UserService.add(...req.body)

			return res.json(response);
		} catch (error) {
			console.log(error);
		}
	}

	async read (req, res) {
		try {
			const filter = {
				id: req.filter.id
			};

			const response = await UserService.read(filter);

			return res.json(response);
		} catch (error) {
			return res.json({
				error,
				message: "Errro"
			});
		}
	}

	async put(req, res) {
		try {
			const filter = {
				id: req.filter.id
			}

			const changes = req.data;

			const response = await UserService.update(filter, changes);

			return res.json(response);
		} catch (error) {
			return res.json({
				error,
				message: "Errro"
			});
		}
	}

	async delete(req, res) {
		try {
			const filter = {
				id: req.data.id
			};

			await UserService.delete(filter);

			return res.status(200).json({
				message: 'User deleted sucessfully'
			})
		} catch (error) {
			return res.status(400).json({
				message: 'Error',
				error
			})
		}
	}
}

export default new UserController();