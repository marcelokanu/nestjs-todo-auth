import { AuthModule } from './auth/auth.module';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';

import { TasksModule } from './tasks/tasks.module';
import { UsersModule } from './users/users.module';

const db_user = 'USERNAME';
const db_password = 'PASSWORD';
const db_name = 'DB_NAME';

@Module({
  imports: [
    MongooseModule.forRoot(
      `mongodb+srv://${db_user}:${db_password}@cluster0-qqm3y.mongodb.net/${db_name}?retryWrites=true&w=majority`,
    ),
    AuthModule,
    TasksModule,
    UsersModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
