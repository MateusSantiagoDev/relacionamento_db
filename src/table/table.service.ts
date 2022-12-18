import { Injectable } from '@nestjs/common';
import { randomUUID } from 'crypto';
import { CreateTableDto } from './dto/create-table.dto';
import { UpdateTableDto } from './dto/update-table.dto';
import { TableEntity } from './entities/table.entity';
import { TableRepository } from './table.repository';

@Injectable()
export class TableService {
  constructor(private readonly repository: TableRepository) {};
  async create(dto: CreateTableDto): Promise<TableEntity> {
    try {
      const data: TableEntity = { ...dto, id: randomUUID() };
      return await this.repository.create(data);
    } catch (err) {}
  }

  async findAll(): Promise<TableEntity[]> {
    try {
      return await this.repository.findAll();
    } catch (err) {}
  }

  async findOne(id: string): Promise<TableEntity> {
    try {
      return await this.repository.findOne(id);
    } catch (err) {}
  }

  async update(id: string, dto: UpdateTableDto): Promise<TableEntity> {
    try {
      await this.findOne(id);
      const data: Partial<TableEntity> = { ...dto };
      return await this.repository.update(id, data);
    } catch (err) {}
  }

  async delete(id: string): Promise<TableEntity> {
    try {
      await this.findOne(id);
      return await this.repository.delete(id);
    } catch (err) {}
  }
}
