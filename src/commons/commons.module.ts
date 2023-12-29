import { Module } from '@nestjs/common';
import { CommonsService } from './commons.service';
import { CommonsController } from './commons.controller';
import { PrismaService } from 'src/prisma/prisma.service';

@Module({
  controllers: [CommonsController],
  providers: [CommonsService, PrismaService],
})
export class CommonsModule {}
