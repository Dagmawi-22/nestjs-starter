
import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsOptional, IsArray, IsNumber } from 'class-validator';

      
export class UpdateContentDto {


   @ApiProperty({
    description: 'kenoText',
    required: false,
  })
  @IsString({ message: 'Keno text can not be empty.' })
  @IsOptional()
  kenoText?: string;

  @ApiProperty({
    description: 'drawText',
    required: false,
  })
  @IsString({ message: 'Draw text can not be empty.' })
  @IsOptional()
  drawText?: string;

  @ApiProperty({
    description: 'drawText',
    required: false,
  })
  @IsString({ message: 'Banner text can not be empty.' })
  @IsOptional()
  bannerText?: string;

  @ApiProperty({
    description: 'hitAndWinText',
    required: false,
  })
  @IsArray({ message: 'hitAndWinText can not be empty.' })
  @IsOptional()
  hitAndWinText?: string[];

  @ApiProperty({
    description: 'payoutTitle',
    required: false,
  })
  @IsArray({ message: 'Payout title can not be empty.' })
  @IsOptional()
  payoutTitle?: string[];

 @ApiProperty({
    description: 'jackpotText',
    required: false,
  })
  @IsNumber()
  @IsOptional()
  jackpotText?: number;

}
