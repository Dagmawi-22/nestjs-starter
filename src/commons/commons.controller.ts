import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CommonsService } from './commons.service';
import { CreateCommonDto } from './dto/create-common.dto';
import { UpdateCommonDto } from './dto/update-common.dto';

@Controller('commons')
export class CommonsController {
  constructor(private readonly commonsService: CommonsService) {}

  @Post()
  create(@Body() createCommonDto: CreateCommonDto) {
    return this.commonsService.create(createCommonDto);
  }

  @Get()
  findAll() {
    return this.commonsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.commonsService.findOne(+id);
  }

  @Patch()
   update(@Body() updateCommonDto: UpdateCommonDto) {
    return  this.commonsService.update(updateCommonDto);
  }

  @Delete()
  remove() {
    return this.commonsService.remove();
  }
}
