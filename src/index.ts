import 'dotenv/config';
import routes from './routes';
import express from 'express';
import cors from 'cors';
import { Server } from 'http';
import { PrismaClient } from '@prisma/client';

const app = express();


app.use(cors());
app.use(express.json());
app.use('/api', routes);

// add prisma to the NodeJS global type
interface CustomNodeJsGlobal extends Global {
  prisma: PrismaClient;
}

// Prevent multiple instances of Prisma Client in development
declare const global: CustomNodeJsGlobal;

const prisma = global.prisma || new PrismaClient();

let server: Server;
prisma.$connect().then(() => {
  server = app.listen(process.env.PORT, () => {
    console.info(`Listening to port ${process.env.PORT}`);
  });
});
