import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ContentsService } from './contents.service';
import { CreateContentDto } from './dto/create-content.dto';
import { UpdateContentDto } from './dto/update-content.dto';

@Controller('contents')
export class ContentsController {
  constructor(private readonly contentsService: ContentsService) {}

  @Post()
  create(@Body() createContentDto: CreateContentDto) {
    return this.contentsService.create(createContentDto);
  }

  @Get()
  findAll() {
    return this.contentsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.contentsService.findOne(+id);
  }

  @Patch()
 async update(@Body() updateContentDto: UpdateContentDto) {
    return await this.contentsService.update(updateContentDto);
  }

  @Delete()
  remove() {
    return this.contentsService.remove();
  }
}
