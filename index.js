import express, { json }    from 'express';
import { config }           from 'dotenv';
import router               from './src/routers/task.js';
import connectToDataBase    from './src/database/connection.js';

const app               = express();
const port              = 8080

app.use(json());

config();

connectToDataBase();

app.use('/task', router);

app.listen(port, () => console.log(`Rodando na porta ${port}`))
