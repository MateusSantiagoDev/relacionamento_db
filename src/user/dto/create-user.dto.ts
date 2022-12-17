import { ApiProperty } from '@nestjs/swagger';

export class CreateUserDto {
    @ApiProperty({
        description: 'Nome do usuário',
        example: 'Mateus Santiago',
    })
    name: string;

    @ApiProperty({
        description: 'CPF do usuário',
        example: '00000000000'
    })
    cpf: string;

    @ApiProperty({
        description: 'Idade do usuário',
        example: 30,
    })
    idade: number;

    @ApiProperty({
        description: 'credencial do usuário'
    })
    role: string;

    @ApiProperty({
        description: 'Password do usuário',
        example: 'secret',
    })
    password: string;
}