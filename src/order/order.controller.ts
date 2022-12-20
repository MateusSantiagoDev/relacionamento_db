import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { OrderService } from './order.service';
import { CreateOrderDto } from './dto/create-order.dto';
import { UpdateOrderDto } from './dto/update-order.dto';
import { OrderEntity } from './entities/order.entity';

@Controller('order')
export class OrderController {
  constructor(private readonly service: OrderService) {}

  @Post()
  create(@Body() dto: CreateOrderDto): Promise<OrderEntity> {
    try {
      return this.service.create(dto);
    } catch (err) {}
  }

  @Get()
  findAll(): Promise<OrderEntity[]> {
    try {
      return this.service.findAll();
    } catch (err) {}
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<OrderEntity> {
    try {
      return this.service.findOne(id);
    } catch (err) {}
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() dto: UpdateOrderDto): Promise<OrderEntity> {
    try {
      return this.service.update(id, dto);
    } catch (err) {}
  }

  @Delete(':id')
  delete(@Param('id') id: string): Promise<OrderEntity> {
    try {
      return this.service.delete(id);
    } catch (err) {}
  } 
}
