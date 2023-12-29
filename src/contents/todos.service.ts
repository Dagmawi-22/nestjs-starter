import { HttpCode, Injectable } from '@nestjs/common';
import { CreateTodoDto } from './dto/create-content.dto';
import { UpdateTodoDto } from './dto/update-content.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { Content } from '@prisma/client';

@Injectable()
export class TodosService {
  constructor(private prisma: PrismaService) {}

   @HttpCode(201)
  create(createTodoDto: CreateTodoDto) {
    return 'This action adds a new todo.';
  }
 @HttpCode(200)
  async findAll(): Promise<string | null> {
     return 'This action returns all todos.';
  }

   @HttpCode(200)  
  findOne(id: number) {
      return `This action returns a #${id} todo`;
    }

     @HttpCode(200)
    async update(id: number, updateTodoDto: UpdateTodoDto) {
      return `This action updates a #${id} todo`;
    }
  
    @HttpCode(200)
    remove() {
      return `This action deletes all todos.`;
    }
}
