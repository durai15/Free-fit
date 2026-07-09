import compress from '@fastify/compress';
import helmet from '@fastify/helmet';
import { ValidationPipe } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { NestFactory } from '@nestjs/core';
import { FastifyAdapter, type NestFastifyApplication } from '@nestjs/platform-fastify';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create<NestFastifyApplication>(
    AppModule,
    new FastifyAdapter({
      logger: true
    })
  );

  await app.register(helmet);
  await app.register(compress, { global: true });

  const configService = app.get(ConfigService);
  const corsOrigin = configService.get<string>('CORS_ORIGIN') ?? true;

  app.enableCors({
    origin: corsOrigin,
    credentials: true
  });

  app.setGlobalPrefix('api');
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
      transform: true
    })
  );

  const port = configService.get<number>('PORT') ?? 4000;
  await app.listen(port, '0.0.0.0');
}

void bootstrap();
