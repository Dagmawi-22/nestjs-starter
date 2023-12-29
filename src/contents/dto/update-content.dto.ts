
import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsOptional } from 'class-validator';

      
export class UpdateTodoDto {


   @ApiProperty({
    description: 'title',
    required: true,
  })
  @IsString({ message: 'Todo title can not be empty.' })
  @IsOptional()
  title?: string;

  @ApiProperty({
    description: 'Todo content',
    required: true,
  })
  @IsString({ message: 'Todo content can not be empty.' })
  @IsOptional()
  todoContent?: string;

}
