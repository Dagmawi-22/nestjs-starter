
import { ApiProperty } from '@nestjs/swagger';
import { IsOptional, IsObject, IsNumber, IsPositive } from 'class-validator';

      
export class CreateCommonDto {


  @ApiProperty({
    description: 'payoutTbl',
    required: true,
  })
  @IsObject({ message: 'Pay out can not be non json.' })
  @IsOptional()
  payoutTbl?: object;

  @ApiProperty({
    description: 'maxBetAmount',
    required: true,
  })
  @IsNumber()
  @IsPositive()
  @IsOptional()
  maxBetAmount?: number;

  
   @ApiProperty({
    description: 'minBetAmount',
    required: true,
  })
  @IsNumber()
  @IsPositive()
  @IsOptional()
  minBetAmount?: number;

  @ApiProperty({
    description: 'minDepositAmount',
    required: true,
  })
  @IsNumber()
  @IsPositive()
  @IsOptional()
  minDepositAmount?: number;

  @ApiProperty({
    description: 'maxDepositAmount',
    required: true,
  })
  @IsNumber()
  @IsPositive()
  @IsOptional()
  maxDepositAmount?: number;

   @ApiProperty({
    description: 'maxWithdrawAmount',
    required: true,
  })
  @IsNumber()
  @IsPositive()
  @IsOptional()
  maxWithdrawAmount?: number;

   @ApiProperty({
    description: 'minWithdrawAmount',
    required: true,
  })
  @IsNumber()
  @IsPositive()
  @IsOptional()
  minWithdrawAmount?: number;

  @ApiProperty({
    description: 'defaultDailyId',
    required: true,
  })
  @IsNumber()
  @IsPositive()
  @IsOptional()
  defaultDailyID?: number;

   @ApiProperty({
    description: 'time',
    required: true,
  })
  @IsNumber()
  @IsPositive()
  @IsOptional()
  time?: number;
}
