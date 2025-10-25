import { DataSource, DataSourceOptions } from "typeorm";
import * as dotenv from 'dotenv';

dotenv.config({ path: '.env.secrets' });
dotenv.config({ path: process.env.NODE_ENV ? `.env.${process.env.NODE_ENV}` : '.env.local' });

export const dataSourceOptions: DataSourceOptions = {
    type: process.env.DB_TYPE as 'postgres',
    host: process.env.DB_HOST,
    port: parseInt(process.env.DB_PORT, 10),
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
    entities: ['dist/scopes/**/*.entity.js'],
    synchronize: true,
    logging: true,
    migrations: ['dist/infrastructure/repositories/migrations/*.js'],
}

export const appDataSource = new DataSource(dataSourceOptions);

appDataSource.initialize()
    .then(() => {
        console.log("Data Source has been initialized!");
        console.log("Running migrations");
        return appDataSource.runMigrations();
    })
    .then(() => {
        console.log("Migrations have been run successfully!");
    })
    .catch((err) => {
        console.error("Error during Data Source initialization:", err);
    });