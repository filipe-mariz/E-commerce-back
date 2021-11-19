require('dotenv').config();

const json = {
	dialect: 'postgres',
	host: process.env.DB_HOST,
	username: process.env.DB_USER,
	database: process.env.DB_NAME,
	password: process.env.DB_PASSWORD
};

export const test = json;
export const production = json;
export const development = json;
