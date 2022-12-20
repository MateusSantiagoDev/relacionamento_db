import { ApiProperty } from "@nestjs/swagger";
import { IsNumber } from "class-validator";

export class CreateTableDto {
    @IsNumber()
    @ApiProperty({
        description: 'Número da mesa',
        example: 1,
    })
    number: number;
}
