import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { UpdateOrderDto } from './dto/update-order.dto';
import { OrderEntity } from './entities/order.entity';

@Injectable()
export class OrderRepository {
  constructor(private readonly prisma: PrismaService) {}

  async create(data: OrderEntity): Promise<OrderEntity> {
    return await this.prisma.order.create({ data });
  }

  async findAll(): Promise<OrderEntity[]> {
    return await this.prisma.order.findMany();
  }

  async findOne(id: string): Promise<OrderEntity> {
    return await this.prisma.order.findFirstOrThrow({ where: { id } });
  }

  async update(
    id: string,
    data: Partial<UpdateOrderDto>,
  ): Promise<OrderEntity> {
    return await this.prisma.order.update({ where: { id }, data });
  }

  async delete(id: string): Promise<OrderEntity> {
    return await this.prisma.order.delete({ where: { id } });
  }
}
