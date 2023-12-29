import { HttpCode, Injectable } from '@nestjs/common';
import { CreateContentDto } from './dto/create-content.dto';
import { UpdateContentDto } from './dto/update-content.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { Content } from '@prisma/client';

@Injectable()
export class ContentsService {
  constructor(private prisma: PrismaService) {}

   @HttpCode(201)
  create(createContentDto: CreateContentDto) {
    return 'This action adds a new content';
  }
 @HttpCode(200)
  async findAll(): Promise<Content | null> {
    const result = await this.prisma.content.findMany({
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
      const latestIdResult = await this.prisma.content.findFirst({
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
    async update(updateContentDto: UpdateContentDto) {
      let latestId = await this.getLatestId();
      return this.prisma.content.update({
        where: { id: latestId },
        data: updateContentDto,
      });
    }
  
    @HttpCode(200)
    remove() {
      return this.prisma.content.deleteMany({});
    }
}
