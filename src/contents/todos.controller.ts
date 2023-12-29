import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { TodosService } from './todos.service';
import { CreateTodoDto } from './dto/create-content.dto';
import { UpdateTodoDto } from './dto/update-content.dto';

@Controller('todos')
export class TodosController {
  constructor(private readonly todosService: TodosService) {}

  @Post()
  create(@Body() createTodoDto: CreateTodoDto) {
    return this.todosService.create(createTodoDto);
  }

  @Get()
  findAll() {
    return this.todosService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.todosService.findOne(+id);
  }

  @Patch()
 async update(@Body() updateTodoDto: UpdateTodoDto, id: number) {
    return await this.todosService.update(id, updateTodoDto);
  }

  @Delete()
  remove() {
    return this.todosService.remove();
  }
}
