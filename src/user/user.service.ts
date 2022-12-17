import { Injectable } from "@nestjs/common";
import { randomUUID } from "crypto";
import { CreateUserDto } from "./dto/create-user.dto";
import { UpdateUserDto } from "./dto/update-user.dto";
import { UserEntity } from "./entities/user.entity";
import { UserRepository } from "./user.repository";

@Injectable()
export class UserService {
  constructor(private readonly repository: UserRepository) {}
  async create(dto: CreateUserDto): Promise<UserEntity> {
   try {
    const data: UserEntity = { ...dto, id: randomUUID() }
    return await this.repository.create(data)
   } catch (err) {}
  }

  async findAll(): Promise<UserEntity[]> {
    try {
      return await this.repository.findAll()
    } catch (err) {}
  }

  async findOne(id: string): Promise<UserEntity> {
    try {
      return await this.repository.findOne(id)
    } catch (err) {}
  }

  async update(id: string, dto: UpdateUserDto): Promise<UserEntity> {
    try {
      await this.findOne(id)
      const data: Partial<UserEntity> = { ...dto };
      return await this.repository.update(id, data)
    } catch (err) {}
  }

  async delete(id: string): Promise<UserEntity> {
    try {
      await this.findOne(id)
      return await this.repository.delete(id)
    } catch (err) {}
  }
}