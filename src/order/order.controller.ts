import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { OrderService } from './order.service';
import { CreateOrderDto } from './dto/create-order.dto';
import { UpdateOrderDto } from './dto/update-order.dto';
import { OrderEntity } from './entities/order.entity';
import { ApiOperation, ApiTags } from '@nestjs/swagger';

@ApiTags('Order')
@Controller('order')
export class OrderController {
  constructor(private readonly service: OrderService) {}

  @ApiOperation({
    summary: 'Adicionar um novo pedido'
  })
  @Post()
  create(@Body() dto: CreateOrderDto): Promise<OrderEntity> {
    try {
      return this.service.create(dto);
    } catch (err) {}
  }

  @ApiOperation({
    summary: 'Visualizar todos os pedidos'
  })
  @Get()
  findAll(): Promise<OrderEntity[]> {
    try {
      return this.service.findAll();
    } catch (err) {}
  }

  @ApiOperation({
    summary: 'Buscar um pedido pelo ID'
  })
  @Get(':id')
  findOne(@Param('id') id: string): Promise<OrderEntity> {
    try {
      return this.service.findOne(id);
    } catch (err) {}
  }

  @ApiOperation({
    summary: 'Editar um pedido pelo ID'
  })
  @Patch(':id')
  update(@Param('id') id: string, @Body() dto: UpdateOrderDto): Promise<OrderEntity> {
    try {
      return this.service.update(id, dto);
    } catch (err) {}
  }

  @ApiOperation({
    summary: 'Remover um pedido pelo ID'
  })
  @Delete(':id')
  delete(@Param('id') id: string): Promise<OrderEntity> {
    try {
      return this.service.delete(id);
    } catch (err) {}
  } 
}
