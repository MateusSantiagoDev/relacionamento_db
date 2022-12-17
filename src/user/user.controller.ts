import { Body, Controller, Get, Post, Param, Patch, Delete } from '@nestjs/common';
import { ApiTags, ApiOperation } from '@nestjs/swagger';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { UserEntity } from './entities/user.entity';
import { UserService } from './user.service';

@ApiTags('User')
@Controller()
export class UserController {
  constructor(private readonly service: UserService) {}

  @ApiOperation({
    summary: 'adicionar um novo usuário'
  })
  @Post()
  create(@Body() dto: CreateUserDto): Promise<UserEntity> {
    try {
        return this.service.create(dto)
    } catch (err) {}
  }

  @ApiOperation({
    summary: 'Visualizar todos os usuários'
  })
  @Get()
  findAll(): Promise<UserEntity[]>{
    try {
      return this.service.findAll()
    } catch (err) {}
  }

  @ApiOperation({
    summary: 'Buscar um usuário pelo ID'
  })
  @Get(':id')
  findOne(@Param('id') id: string): Promise<UserEntity> {
    try {
      return this.service.findOne(id)
    } catch (err) {}
  }

  @ApiOperation({
    summary: 'Editar um usuário pelo ID'
  })
  @Patch(':id')
  update(@Param('id') id: string, @Body() dto: UpdateUserDto): Promise<UserEntity> {
    try {
      return this.service.update(id, dto)
    } catch (err) {}
  }

  @ApiOperation({
    summary: 'Remover um usuário pelo ID'
  })
  @Delete(':id')
  delete(@Param('id') id: string): Promise<UserEntity> {
    try {
      return this.service.delete(id)
    } catch (err) {}
  }

}
