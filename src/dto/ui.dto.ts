
import { IsString, IsInt, Validate } from 'class-validator';
import { IsHexCode } from 'src/validators/hex.validator';

export class UiDto {

  @IsString()
  readonly key: string;

  @IsInt()
  readonly value: number;

  @IsInt()
  readonly font_size: number;

  @IsInt()
  readonly primary_color: number;

  @IsInt()
  readonly secondary_color: number;

  @IsString()
  @Validate(IsHexCode)
  readonly background_color: string;

}
