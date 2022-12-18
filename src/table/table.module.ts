import { Module } from '@nestjs/common';
import { TableService } from './table.service';
import { TableController } from './table.controller';
import { PrismaModule } from 'src/prisma/prisma.module';
import { TableRepository } from './table.repository';

@Module({
  imports: [PrismaModule],
  controllers: [TableController],
  providers: [TableService, TableRepository],
})
export class TableModule {}
