import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { TableEntity } from './entities/table.entity';

@Injectable()
export class TableRepository {
  constructor(private readonly prisma: PrismaService) {}

  async create(data: TableEntity): Promise<TableEntity> {
    return await this.prisma.table.create({ data });
  }

  async findAll(): Promise<TableEntity[]> {
    return await this.prisma.table.findMany();
  }

  async findOne(id: string): Promise<TableEntity> {
    return await this.prisma.table.findFirstOrThrow({ where: { id } });
  }

  async update(id: string, data: Partial<TableEntity>): Promise<TableEntity> {
    return await this.prisma.table.update({ where: { id }, data });
  }

  async delete(id: string): Promise<TableEntity> {
    return await this.prisma.table.delete({ where: { id } });
  }
}
