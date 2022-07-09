import express from 'express';
import cors from 'cors';
import userRouter from './routes/user.routes.js'
import swaggerJSDoc from 'swagger-jsdoc';
import swaggerUi from 'swagger-ui-express';
import { config as dotenv } from 'dotenv'
import { options } from './swaggerOptions.js'

dotenv()



const app = express();


const specs = swaggerJSDoc(options)
app.use(cors())
app.use(express.json());

app.use('/', userRouter);
app.use('/docs', swaggerUi.serve, swaggerUi.setup(specs))

export default app