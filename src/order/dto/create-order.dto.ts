import { ApiProperty } from "@nestjs/swagger";

export class CreateOrderDto {
    @ApiProperty({
      description: 'Nome do produto',
      example: 'Pizza de mussarela'
    })
  name: string;

  @ApiProperty({
    description: 'Descrição do produto',
    example: 'Mussarela, oregano, tomate e borda recheada com catupiry'
  })
  description: string;

  @ApiProperty({
    description: 'Preço do produto',
    example: 35.50,
  })
  price: number;

  @ApiProperty({
    description: 'Imagem do produto',
    example: 'https://docplayer.com.br/docs-images/91/107684195/images/3-0.jpg'
  })
  image: string;
}
