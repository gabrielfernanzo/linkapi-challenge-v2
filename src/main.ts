import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix('/api/');

  const config = new DocumentBuilder()
    .setTitle(`LinkApi's Challenge Api`)
    .setDescription(
      `Node.js Restful Api for a Pipedrive and Bling integration.`,
    )
    .setVersion('0.2')
    .setContact(
      'Gabriel Fernandes',
      'https://github.com/gabrielFernandes-dev/linkapi-challenge-v2',
      'gabriel.work076@gmail.com',
    )
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('/api/docs', app, document);

  await app.listen(3000);
}
bootstrap();
