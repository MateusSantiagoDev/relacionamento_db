import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.useGlobalPipes(new ValidationPipe())

  const config = new DocumentBuilder()
  .setTitle('API')
  .setDescription('aplicação de relacionamento entre tabelas')
  .setVersion('1.0.0')
  .addTag('Status')
  .addTag('User')
  .addTag('Table')
  .addTag('Order')
  .build()

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document)

  await app.listen(3322);
}
bootstrap();
