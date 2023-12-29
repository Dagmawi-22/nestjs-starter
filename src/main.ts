import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
 
    const config = new DocumentBuilder()
    .setTitle('Todo Sample Nestjs, Postgress, Prisma API by @Dagmawi-22')
    .setDescription('API documentation for Todo App')
    .setVersion('1.0')
    .addTag('Todo')
    .addBearerAuth()
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('docs', app, document);

   await app.listen(3000);

}
bootstrap();
