
import { ApiProperty } from '@nestjs/swagger';
import { IsOptional, IsObject, IsNumber, IsPositive } from 'class-validator';

      
export class UpdateCommonDto {


  @ApiProperty({
    description: 'payoutTbl',
    required: false,
  })
  @IsObject({ message: 'Pay out can not be non json.' })
  @IsOptional()
  payoutTbl?: object;

  @ApiProperty({
    description: 'maxBetAmount',
    required: false,
  })
  @IsNumber()
  @IsPositive()
  @IsOptional()
  maxBetAmount?: number;

  
   @ApiProperty({
    description: 'minBetAmount',
    required: false,
  })
  @IsNumber()
  @IsPositive()
  @IsOptional()
  minBetAmount?: number;

  @ApiProperty({
    description: 'minDepositAmount',
    required: false,
  })
  @IsNumber()
  @IsPositive()
  @IsOptional()
  minDepositAmount?: number;

  @ApiProperty({
    description: 'maxDepositAmount',
    required: false,
  })
  @IsNumber()
  @IsPositive()
  @IsOptional()
  maxDepositAmount?: number;

   @ApiProperty({
    description: 'maxWithdrawAmount',
    required: false,
  })
  @IsNumber()
  @IsPositive()
  @IsOptional()
  maxWithdrawAmount?: number;

   @ApiProperty({
    description: 'minWithdrawAmount',
    required: false,
  })
  @IsNumber()
  @IsPositive()
  @IsOptional()
  minWithdrawAmount?: number;

  @ApiProperty({
    description: 'defaultDailyId',
    required: false,
  })
  @IsNumber()
  @IsPositive()
  @IsOptional()
  defaultDailyID?: number;

   @ApiProperty({
    description: 'time',
    required: false,
  })
  @IsNumber()
  @IsPositive()
  @IsOptional()
  time?: number;
}
