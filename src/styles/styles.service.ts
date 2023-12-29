import { HttpCode, Injectable } from '@nestjs/common';
import { CreateStyleDto } from './dto/create-style.dto';
import { UpdateStyleDto } from './dto/update-style.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { Style } from '@prisma/client';

@Injectable()
export class StylesService {
  constructor(private prisma: PrismaService) {}


   @HttpCode(201)
  async create(createStyleDto: CreateStyleDto) {
    return 'This action adds a new style';
  }
 async findAll(): Promise<Style | null> {
    const result = await this.prisma.style.findMany({
      take: 1,
      orderBy: {
        id: 'desc',
      },
    });
  
    return result.length > 0 ? result[0] : null;
  }

   @HttpCode(200)
  findOne(id: number) {
    return `This action returns a #${id} style`;
  }

  async getLatestId(): Promise<number | null> {
    const latestIdResult = await this.prisma.style.findFirst({
      orderBy: {
        id: 'desc',
      },
      select: {
        id: true,
      },
    });
  
    return latestIdResult?.id || null;
  }

   @HttpCode(200)
  async update(updateStyleDto: UpdateStyleDto) {
    let latestId = await this.getLatestId();
    return this.prisma.style.update({
      where: { id: latestId },
      data: updateStyleDto,
    });
  }

   @HttpCode(200)
  remove() {
    return this.prisma.style.deleteMany({});
  }
}
