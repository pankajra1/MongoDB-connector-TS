import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import { userRoutes } from './routes/user.routes';
export const app = express();

app.use(cors());
app.use(bodyParser.json());


app.get('/', (req: express.Request, res: express.Response) => {
    res.send('MongoDB Connector API is running');
  });
  
app.use('/users', userRoutes);