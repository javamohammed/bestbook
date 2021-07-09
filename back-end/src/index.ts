
import express, { Application, Request, Response } from "express";
import helmet from "helmet";
import morgan from "morgan";
import {connect, set} from "mongoose";
import dotenv from "dotenv";
import userRoutes from "./routes/user";
import userAuth from "./routes/auth";
import postRoutes from "./routes/post";
const app: Application = express();

//get .env vars
dotenv.config();

// Body parsing Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(helmet());
app.use(morgan("common"))

//Routes
app.use('/api/users', userRoutes);
app.use('/api/auth', userAuth);
app.use('/api/posts', postRoutes);


process.setMaxListeners(0);
//Mongoose Configuration
set('useNewUrlParser', true);
set('useFindAndModify', false);
set('useCreateIndex', true);
const MONGO_URL: string = (process.env.MONGO_URL as string);
console.log(MONGO_URL);
app.get(
    "/",
    async (req: Request, res: Response): Promise<Response> => {
        return res.status(200).send({
            message: "Hello World!!!!!!!",
        });
    }
);

async function run():Promise<void>{
    await connect(MONGO_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true
      })
    console.log(`The database bestbook is connected...`);
}

run().then(_=>{
    try {
        app.listen(process.env.PORT, (): void => {
            console.log(`Connected successfully on port ${process.env.PORT}`);
            run().catch(err => console.log(err));
        });
    } catch (error) {
        console.error(`Error occurred: ${error.message}`);
    }
}).catch(err => console.log("Connection to database failed ",err));

