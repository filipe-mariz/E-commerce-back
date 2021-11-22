require('dotenv').config();

const json = {
	dialect: 'postgres',
	host: process.env.DB_HOST,
	username: process.env.DB_USER,
	database: process.env.DB_NAME,
	password: process.env.DB_PASSWORD,
	operatorsAliases: false,
	logging: false,
	define: {
		timestamps: true,
		underscored: true,
		underscoredAll: true
	}
};

module.exports = {
	test: json,
	production: json,
	development: json
};
