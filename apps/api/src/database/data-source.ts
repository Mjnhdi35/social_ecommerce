import 'reflect-metadata';

import { DataSource } from 'typeorm';
import { env } from '../config/env.js';
import { User } from '../users/entities/user.entity.js';

export const AppDataSource = new DataSource({
  type: 'postgres',
  host: env.DATABASE_HOST,
  port: env.DATABASE_PORT,
  username: env.DATABASE_USER,
  password: env.DATABASE_PASSWORD,
  database: env.DATABASE_NAME,
  entities: [User],
  logging: ['query', 'error'],
  synchronize: false,
  migrations: ['dist/database/migrations/*.js'],
  migrationsRun: false,
  migrationsTableName: 'migrations',
  migrationsTransactionMode: 'all',
});
