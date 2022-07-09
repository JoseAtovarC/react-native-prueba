import express from 'express';
import cors from 'cors';
import swaggerJSDoc from 'swagger-jsdoc';
import swaggerUi from 'swagger-ui-express';
import { config as dotenv } from 'dotenv'


dotenv()



const app = express();

app.use(cors())
app.use(express.json());


export default app