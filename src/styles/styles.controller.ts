import { Controller, Get, Post, Body, Patch, Param, Delete, ParseFilePipeBuilder } from '@nestjs/common';
import { StylesService } from './styles.service';
import { CreateStyleDto } from './dto/create-style.dto';
import { UpdateStyleDto } from './dto/update-style.dto';
import { ApiParam, ApiTags } from '@nestjs/swagger';
import { HttpCode, UploadedFile, UseInterceptors } from '@nestjs/common/decorators';
import { FileInterceptor } from '@nestjs/platform-express';
import * as fs from 'fs';
import * as path from 'path';



@Controller('styles')
export class StylesController {
  constructor(private readonly stylesService: StylesService) {}

  @Post()
  create(@Body() createStyleDto: CreateStyleDto) {
    return this.stylesService.create(createStyleDto);
  }

@Get()
findAll() {
  return this.stylesService.findAll();
}

 @Get(':id')
  findOne(@Param('id') id: string) {
    return this.stylesService.findOne(+id);
  }

 @HttpCode(201)
  @Post('upload-logo')
   @ApiParam({ name: 'logo', description: 'The new logo', type: 'file' })
  @UseInterceptors(FileInterceptor('logo'))
  public async uploadFile(
    @UploadedFile(
      new ParseFilePipeBuilder()
        .addFileTypeValidator({ fileType: 'image/*' })
        .addMaxSizeValidator({ maxSize: 100000000 })
        .build({ errorHttpStatusCode: 422 }),
    )
    file,
  ) {
    if (!file) {
      throw new Error('No file provided');
    }

    const uploadDir = 'uploads';
    const filePath = path.join(uploadDir, file.originalname);

    if (!fs.existsSync(uploadDir)) {
      fs.mkdirSync(uploadDir, { recursive: true });
    }

    fs.writeFileSync(filePath, file.buffer);

    return this.update({logo: filePath});
  }


  @Patch()
  async update(@Body() updateStyleDto: UpdateStyleDto) {
    return await this.stylesService.update(updateStyleDto);
  }

  @Delete()
  remove() {
    return this.stylesService.remove();
  }
}
