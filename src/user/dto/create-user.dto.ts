import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsNumber } from 'class-validator';

export class CreateUserDto {

    @IsString()
    @ApiProperty({
        description: 'Nome do usuário',
        example: 'Mateus Santiago',
    })
    name: string;

    @IsString()
    @ApiProperty({
        description: 'CPF do usuário',
        example: '00000000000'
    })
    cpf: string;

    @IsNumber()
    @ApiProperty({
        description: 'Idade do usuário',
        example: 30,
    })
    idade: number;

    @IsString()
    @ApiProperty({
        description: 'credencial do usuário'
    })
    role: string;

    @IsString()
    @ApiProperty({
        description: 'Password do usuário',
        example: 'secret',
    })
    password: string;
}