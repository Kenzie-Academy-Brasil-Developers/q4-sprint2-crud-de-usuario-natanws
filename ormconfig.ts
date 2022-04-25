import dotenv from 'dotenv';
import path from 'path';
import { ConnectionOptions } from "typeorm";

dotenv.config();

export default {
   type: "postgres",
   host: "localhost",
   port: 5432,
   username: "postgres",
   password: process.env.POSTGRES_PASSWORD,
   database: process.env.POSTGRES_DB,
   synchronize: true,
   logging: false,
   entities: [
      path.join(__dirname, "src/entities/**/*.*")
   ],
   migrations: [
      path.join(__dirname, "src/migrations/**/*.*")
   ],
   subscribers: [
      path.join(__dirname, "src/subscriber/**/*.*")
   ],
   cli: {
      entitiesDir: path.join(__dirname, "src/entities"),
      migrationsDir: path.join(__dirname, "src/migrations"),
      subscribersDir: path.join(__dirname, "src/subscriber")
   }
} as ConnectionOptions