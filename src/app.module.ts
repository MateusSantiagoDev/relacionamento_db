import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { PrismaModule } from './prisma/prisma.module';
import { TableModule } from './table/table.module';
import { OrderModule } from './order/order.module';

@Module({
  imports: [UserModule, PrismaModule, TableModule, OrderModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
