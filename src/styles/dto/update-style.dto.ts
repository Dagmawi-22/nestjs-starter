import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsOptional, IsArray } from 'class-validator';

      
export class UpdateStyleDto {

  @ApiProperty({
    description: 'logo',
    required: false,
  })
  @IsOptional()
    logo?: string;

  @ApiProperty({
    description: 'backgroundColor',
    required: false,
  })
  @IsString({ message: 'Background color can not be empty.' })
  @IsOptional()
  backgroundColor?: string;

  @ApiProperty({
    description: 'textColor',
    required: false,
  })
  @IsString({ message: 'Text color can not be empty.' })
  @IsOptional()
  kenoTextColor?: string;

  @ApiProperty({
    description: 'timerColor',
    required: false,
  })
  @IsString({ message: 'Timer color can not be empty.' })
  @IsOptional()
  timerColor?: string;

  @ApiProperty({
    description: 'drawTextColor',
    required: false,
  })
  @IsString({ message: 'Draw text color can not be empty.' })
  @IsOptional()
  drawTextColor?: string;

  @ApiProperty({
    description: 'gameIdTextColor',
    required: false,
  })
  @IsString({ message: 'Game Id text color can not be empty.' })
  @IsOptional()
  gameIdTextColor?: string;

  @ApiProperty({
    description: 'bannerBackgroundColor',
    required: false,
  })
  @IsString({ message: 'Banner background color can not be empty.' })
  @IsOptional()
  bannerBackgroundColor?: string;

  @ApiProperty({
    description: 'bannerTextColor',
    required: false,
  })
  @IsString({ message: 'Banner text color can not be empty.' })
  @IsOptional()
  bannerTextColor?: string;

  @ApiProperty({
    description: 'selectedHICellColor',
    required: false,
  })
  @IsString({ message: 'Selected HI cell color can not be empty.' })
  @IsOptional()
  selectedHICell?: string;

  @ApiProperty({
    description: 'unselectedHICellColor',
    required: false,
  })
  @IsString({ message: 'Unselected HI cell color can not be empty.' })
  @IsOptional()
  unselectedCell?: string;

   @ApiProperty({
    description: 'selectedLowCellColor',
    required: false,
  })
  @IsString({ message: 'Selected low cell color can not be empty.' })
  @IsOptional()
  selectedLowCell?: string;

   @ApiProperty({
    description: 'jackpotTextColor',
    required: false,
  })
  @IsString({ message: 'Jackpot text color can not be empty.' })
  @IsOptional()
  jackpotTextColor?: string;

   @ApiProperty({
    description: 'handSelectedTextColor',
    required: false,
  })
  @IsString({ message: 'Hand selected text color can not be empty.' })
  @IsOptional()
  headSelectedColor?: string;

   @ApiProperty({
    description: 'handUnSelectedTextColor',
    required: false,
  })
  @IsString({ message: 'Hand unselected text color can not be empty.' })
  @IsOptional()
  headUnselectedColor?: string;

   @ApiProperty({
    description: 'evenColor',
    required: false,
  })
  @IsString({ message: 'Even color can not be empty.' })
  @IsOptional()
  evenColor?: string;

   @ApiProperty({
    description: 'counterColor',
    required: false,
  })
  @IsArray({ message: 'Counter color can not be empty.' })
  @IsOptional()
  counterColor?: string[];

   @ApiProperty({
    description: 'payoutTitleColor',
    required: false,
  })
  @IsString({ message: 'Payout title color can not be empty.' })
  @IsOptional()
  payoutTitleColor?: string;

   @ApiProperty({
    description: 'hitAndWinColor',
    required: false,
  })
  @IsString({ message: 'Hit and win color can not be empty.' })
  @IsOptional()
  hitAndWinColor?: string;
}
