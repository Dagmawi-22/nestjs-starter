import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsOptional, IsArray } from 'class-validator';

      
export class CreateStyleDto {

  @ApiProperty({
    description: 'logo',
    required: true,
  })
  @IsOptional()
    logo?: string;

  @ApiProperty({
    description: 'backgroundColor',
    required: true,
  })
  @IsString({ message: 'Background color can not be empty.' })
  @IsOptional()
  backgroundColor?: string;

  @ApiProperty({
    description: 'textColor',
    required: true,
  })
  @IsString({ message: 'Text color can not be empty.' })
  @IsOptional()
  kenoTextColor?: string;

  @ApiProperty({
    description: 'timerColor',
    required: true,
  })
  @IsString({ message: 'Timer color can not be empty.' })
  @IsOptional()
  timerColor?: string;

  @ApiProperty({
    description: 'drawTextColor',
    required: true,
  })
  @IsString({ message: 'Draw text color can not be empty.' })
  @IsOptional()
  drawTextColor?: string;

  @ApiProperty({
    description: 'gameIdTextColor',
    required: true,
  })
  @IsString({ message: 'Game Id text color can not be empty.' })
  @IsOptional()
  gameIdTextColor?: string;

  @ApiProperty({
    description: 'bannerBackgroundColor',
    required: true,
  })
  @IsString({ message: 'Banner background color can not be empty.' })
  @IsOptional()
  bannerBackgroundColor?: string;

  @ApiProperty({
    description: 'bannerTextColor',
    required: true,
  })
  @IsString({ message: 'Banner text color can not be empty.' })
  @IsOptional()
  bannerTextColor?: string;

  @ApiProperty({
    description: 'selectedHICellColor',
    required: true,
  })
  @IsString({ message: 'Selected HI cell color can not be empty.' })
  @IsOptional()
  selectedHICell?: string;

  @ApiProperty({
    description: 'unselectedHICellColor',
    required: true,
  })
  @IsString({ message: 'Unselected HI cell color can not be empty.' })
  @IsOptional()
  unselectedCell?: string;

   @ApiProperty({
    description: 'selectedLowCellColor',
    required: true,
  })
  @IsString({ message: 'Selected low cell color can not be empty.' })
  @IsOptional()
  selectedLowCell?: string;

   @ApiProperty({
    description: 'jackpotTextColor',
    required: true,
  })
  @IsString({ message: 'Jackpot text color can not be empty.' })
  @IsOptional()
  jackpotTextColor?: string;

   @ApiProperty({
    description: 'handSelectedTextColor',
    required: true,
  })
  @IsString({ message: 'Hand selected text color can not be empty.' })
  @IsOptional()
  headSelectedColor?: string;

   @ApiProperty({
    description: 'handUnSelectedTextColor',
    required: true,
  })
  @IsString({ message: 'Hand unselected text color can not be empty.' })
  @IsOptional()
  headUnselectedColor?: string;

   @ApiProperty({
    description: 'evenColor',
    required: true,
  })
  @IsString({ message: 'Even color can not be empty.' })
  @IsOptional()
  evenColor?: string;

   @ApiProperty({
    description: 'counterColor',
    required: true,
  })
  @IsArray({ message: 'Counter color can not be empty.' })
  @IsOptional()
  counterColor?: string[];

   @ApiProperty({
    description: 'payoutTitleColor',
    required: true,
  })
  @IsString({ message: 'Payout title color can not be empty.' })
  @IsOptional()
  payoutTitleColor?: string;

   @ApiProperty({
    description: 'hitAndWinColor',
    required: true,
  })
  @IsString({ message: 'Hit and win color can not be empty.' })
  @IsOptional()
  hitAndWinColor?: string;
}
