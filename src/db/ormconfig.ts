import dotenv from 'dotenv';
import path from 'path';
import { ConnectionOptions } from "typeorm";

dotenv.config();

const dbConfig = {
   type: "postgres",
   host: "localhost",
   port: 5433,
   username: "postgres",
   password: process.env.POSTGRES_PASSWORD,
   database: process.env.POSTGRES_DB,
   synchronize: false,
   logging: false,
   entities: [
      path.join(__dirname, "../entities/**/*.*")
   ],
   migrations: [
      path.join(__dirname, "../migrations/**/*.*")
   ],
   subscribers: [
      path.join(__dirname, "../subscriber/**/*.*")
   ],
   cli: {
      entitiesDir: path.join(__dirname, "../entities"),
      migrationsDir: path.join(__dirname, "../migrations"),
      subscribersDir: path.join(__dirname, "../subscriber")
   }
} as ConnectionOptions

export default dbConfig