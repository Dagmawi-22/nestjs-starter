import { IsNumber, IsInt, Min, Max } from 'class-validator';

export class BetDto {
//   @IsNumber({ allowNaN: false, allowInfinity: false }, { message: 'Value must be a number' })
//   @IsInt({ message: 'Value must be an integer' })
//   @Min(1, { message: 'Min must be at least 1' })
  readonly min: number;

//   @IsNumber({ allowNaN: false, allowInfinity: false }, { message: 'Value must be a number' })
//   @IsInt({ message: 'Value must be an integer' })
//   @Min(1, { message: 'Min must be at least 1' })
//   @Max(100, { message: 'Max must not exceed 100' })
  readonly max: number;
}
