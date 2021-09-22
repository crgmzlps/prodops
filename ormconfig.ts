import { TypeOrmModuleOptions } from '@nestjs/typeorm';

const config: TypeOrmModuleOptions = {
  type: 'postgres',
  url: process.env.DATABASE_URL,
  // host: process.env.DATABASE_HOST,
  // port: parseInt(process.env.DATABASE_PORT),
  // database: process.env.DATABASE_NAME,
  // username: process.env.DATABASE_USERNAME,
  // password: process.env.DATABASE_PASSWORD,
  synchronize: process.env.NODE_ENV !== 'production',
  logging: true,
  entities: ['dist/src/**/*.entity.js'],
  migrations: ['dist/src/db/migrations/*.js'],
  cli: {
    migrationsDir: 'src/db/migrations',
  },
  extra: {
    ssl:
      process.env.NODE_ENV === 'production'
        ? { rejectUnauthorized: false }
        : false,
  },
};

export default config;
