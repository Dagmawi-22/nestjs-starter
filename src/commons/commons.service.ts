import { Common } from '@prisma/client';
import { CreateCommonDto } from './dto/create-common.dto';
import { UpdateCommonDto } from './dto/update-common.dto';
import { HttpCode, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class CommonsService {
  constructor(private prisma: PrismaService) {}

  @HttpCode(201)
  create(CreateCommonDto: CreateCommonDto) {
    return 'This action adds a new common';
  }

  @HttpCode(200)
  async findAll(): Promise<Common | null> {
    const result = await this.prisma.common.findMany({
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
      const latestIdResult = await this.prisma.common.findFirst({
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
    async update(updateCommonDto: UpdateCommonDto) {
      let latestId = await this.getLatestId();
      return await this.prisma.common.update({
        where: { id: latestId },
        data: updateCommonDto,
      });
    }
  
  @HttpCode(200)
    remove() {
      return this.prisma.common.deleteMany({});
    }
}
