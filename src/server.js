import express from 'express';
import Routes from './routes';

const app = express();

app.use(Routes);

console.log('routes');

app.listen(3333, () => console.log('Server is run'));