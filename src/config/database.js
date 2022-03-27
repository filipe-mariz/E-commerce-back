require('dotenv').config();

const json = {
	host: process.env.DB_HOST,
	port: process.env.DB_PORT,
	username: process.env.DB_USER,
	password: process.env.DB_PASS,
	database: process.env.DB_NAME,
	dialect: 'postgres',
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