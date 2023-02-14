import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
// import { connectDB } from './utils/db';

async function bootstrap() {
  // Connecting to database
  // try {
  // await connectDB();
  // console.log('Connected to database');
  // } catch (err) {
  // console.log('Error connecting to database');
  // return;
  // }

  const app = await NestFactory.create(AppModule);
  await app.listen(8080);
}
bootstrap();
