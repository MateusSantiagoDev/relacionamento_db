import { ApiProperty } from "@nestjs/swagger";

export class CreateTableDto {
    @ApiProperty({
        description: 'Número da mesa',
        example: 1,
    })
    number: number;
}
