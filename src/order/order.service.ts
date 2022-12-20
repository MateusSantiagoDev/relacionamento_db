import { Injectable } from '@nestjs/common';
import { randomUUID } from 'crypto';
import { CreateOrderDto } from './dto/create-order.dto';
import { UpdateOrderDto } from './dto/update-order.dto';
import { OrderEntity } from './entities/order.entity';
import { OrderRepository } from './order.repository';

@Injectable()
export class OrderService {
  constructor(private readonly repository: OrderRepository) {}
  async create(dto: CreateOrderDto): Promise<OrderEntity> {
    const data: OrderEntity = { ...dto, id: randomUUID() };
    return await this.repository.create(data)
  }

  async findAll(): Promise<OrderEntity[]> {
    return await this.repository.findAll()
  }

  async findOne(id: string): Promise<OrderEntity> {
    return await this.repository.findOne(id)
  }

  async update(id: string, dto: UpdateOrderDto): Promise<OrderEntity> {
    await this.findOne(id)
    const data: Partial<OrderEntity> = { ...dto };
    return await this.repository.update(id, data)
  }

  async delete(id: string): Promise<OrderEntity> {
    await this.findOne(id)
    return await this.repository.delete(id)
  }
}
