import { Module, MiddlewareConsumer,NestModule } from  '@nestjs/common'
import { BookModule } from './book/book.module';
import { UserModule } from './user/user.module';
import { globalMiddlewareOne } from './utills/logger.middleware';



@Module({
  imports: [BookModule, UserModule],
  controllers: [],
  providers: [],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply( globalMiddlewareOne).forRoutes('*');
  }
}
