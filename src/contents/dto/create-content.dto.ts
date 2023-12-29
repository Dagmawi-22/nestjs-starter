
import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsOptional, IsArray, IsNumber } from 'class-validator';

      
export class CreateContentDto {


   @ApiProperty({
    description: 'kenoText',
    required: true,
  })
  @IsString({ message: 'Keno text can not be empty.' })
  @IsOptional()
  kenoText?: string;

  @ApiProperty({
    description: 'drawText',
    required: true,
  })
  @IsString({ message: 'Draw text can not be empty.' })
  @IsOptional()
  drawText?: string;

  @ApiProperty({
    description: 'drawText',
    required: true,
  })
  @IsString({ message: 'Banner text can not be empty.' })
  @IsOptional()
  bannerText?: string;

  @ApiProperty({
    description: 'hitAndWinText',
    required: true,
  })
  @IsArray({ message: 'hitAndWinText can not be empty.' })
  @IsOptional()
  hitAndWinText?: string[];

  @ApiProperty({
    description: 'payoutTitle',
    required: true,
  })
  @IsArray({ message: 'Payout title can not be empty.' })
  @IsOptional()
  payoutTitle?: string[];

 @ApiProperty({
    description: 'jackpotText',
    required: true,
  })
  @IsNumber()
  @IsOptional()
  jackpotText?: number;

}
