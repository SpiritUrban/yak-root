import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
import { MongooseModule } from '@nestjs/mongoose';
import { BlogModule } from './blog/blog.module';

@Module({
  imports: [

    MongooseModule.forRoot('mongodb://localhost/first', { useNewUrlParser: true }),

    //
    // Variant 1: two static paths
    //

    ServeStaticModule.forRoot({
      serveRoot: '/doge',
      rootPath: `public/doge`,
    }),

    BlogModule,

    // ServeStaticModule.forRoot({
    //   serveRoot: '/',
    //   rootPath: `public/dist-front`,
    //   exclude: ['/api'],
    // }),

    //
    // Other variants
    //

    // ServeStaticModule.forRoot({
    //   rootPath: join(__dirname, '..', 'public/dist-front'),
    // }),

    // ServeStaticModule.forRoot({
    //   rootPath: join(__dirname, '..', 'public/dist-front'),
    //   exclude: ['/api*'],
    // }),

  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
