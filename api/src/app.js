import express from 'express';
import cors from 'cors';
import userRouter from './routes/user.routes.js'
import swaggerJSDoc from 'swagger-jsdoc';
import swaggerUi from 'swagger-ui-express';
import { config as dotenv } from 'dotenv'


dotenv()



const app = express();

app.use(cors())
app.use(express.json());

app.use('/', userRouter);


export default app