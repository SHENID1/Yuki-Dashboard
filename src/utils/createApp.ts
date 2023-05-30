import express, {Express} from "express";
import routes from "../routes";
import cors from "cors";
import session from "express-session";
import { config } from 'dotenv';
config();

export function createApp(): Express{
    const app = express();
    app.use('/api', routes);
    app.use(express.json());
    app.use(express.urlencoded());
    app.use(cors({
        origin: ['http://localhost:3000'],
        credentials: true
    }))
    app.use(session({
        secret: process.env.SECRET_KEY || "QWERTY",
        resave: false,
        saveUninitialized: false,
        cookie: {
            maxAge: 60000 * 60 * 24 * 7,
        }
    }))

    return app;
}