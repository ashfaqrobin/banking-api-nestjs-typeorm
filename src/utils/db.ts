import { Connection, createConnection, createPool } from 'mysql2/promise';

export let db: Connection;

export const connectDB = async () => {
  try {
    const connection = await createConnection({
      host: 'localhost',
      user: 'root',
      password: 'root',
      database: 'nestjs_typeorm_v1',
      port: 3306,
    });

    db = connection;
  } catch (err) {
    console.log(err);
    throw new Error('Error connecting to database');
  }
};

// const pool = createPool({
//   host: 'localhost',
//   user: 'root',
//   password: 'root',
//   database: 'nestjs_typeorm_v1',
//   port: 3306,
//   connectionLimit: 100,
// });

// export default pool;
