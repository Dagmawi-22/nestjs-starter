import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
 
    const config = new DocumentBuilder()
    .setTitle('Keno Admin API')
    .setDescription('API documentation for Keno Admin')
    .setVersion('1.0')
    // .addTag('Admin')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('docs', app, document);

   await app.listen(3000);

}
bootstrap();
