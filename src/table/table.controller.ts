import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { TableService } from './table.service';
import { CreateTableDto } from './dto/create-table.dto';
import { UpdateTableDto } from './dto/update-table.dto';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { TableEntity } from './entities/table.entity';

@ApiTags('Table')
@Controller('table')
export class TableController {
  constructor(private readonly service: TableService) {}

  @ApiOperation({
    summary: 'Criar uma mesa'
  })
  @Post()
  create(@Body() createTableDto: CreateTableDto): Promise<TableEntity> {
    try {
      return this.service.create(createTableDto);
    } catch (err) {}
  }

  @ApiOperation({
    summary: 'Visualizar todas as mesas'
  })
  @Get()
  findAll(): Promise<TableEntity[]> {
    try {
      return this.service.findAll();
    } catch (err) {}
  }

  @ApiOperation({
    summary: 'Buscar uma mesa pelo ID'
  })
  @Get(':id')
  findOne(@Param('id') id: string): Promise<TableEntity> {
    try {
      return this.service.findOne(id);
    } catch (err) {}
  }

  @ApiOperation({
    summary: 'Editar uma mesa pelo ID'
  })
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateTableDto: UpdateTableDto): Promise<TableEntity> {
    try {
      return this.service.update(id, updateTableDto);
    } catch (err) {}
  }

  @ApiOperation({
    summary: 'Remover uma mesa pelo ID'
  })
  @Delete(':id')
  delete(@Param('id') id: string): Promise<TableEntity> {
    try {
      return this.service.delete(id);
    } catch (err) {}
  }
}
