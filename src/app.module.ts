import { Module } from '@nestjs/common';

import { TypeOrmModule } from '@nestjs/typeorm';
import { TaskModule } from './task/task.module';
import { join } from 'path';

@Module({
  imports: [TaskModule,
    TypeOrmModule.forRoot({
      type: "mysql",
      host: "localhost",
      port: 3306,
      username: "root",
      password: "root",
      database: "todo",
      entities: [
        join(__dirname, '/**/*.entity{.js,.ts}')
      ],
      synchronize: true
    })
   
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
