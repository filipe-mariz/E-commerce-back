
import { hash, compare } from "bcryptjs";
import { sign } from "jsonwebtoken";

export default (sequelize, DataTypes) => {
	const User = sequelize.define(
		'users',
		{
			name: DataTypes.STRING,
			phone: DataTypes.STRING,
			email: DataTypes.STRING,
			password: DataTypes.VIRTUAL,
			password_hash: DataTypes.STRING,
			is_admin: DataTypes.BOOLEAN
		}, {
		hooks: {
			beforeSave: async user => {
				if (user.password) {
					user.password_hash = await hash(user.password, 8);
				}
			}
		}
	}
	);

	User.prototype.checkPassword = password => {
		return compare(password, this.password_hash);
	};

	User.prototype.generateToken = () => {
		return sign({ id: this.id }, process.env.APP_KEY);
	}

	return User;
};
