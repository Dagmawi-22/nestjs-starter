import { Module } from '@nestjs/common';
import { PayoutsService } from './payouts.service';
import { PayoutsController } from './payouts.controller';
import { PrismaService } from 'src/prisma/prisma.service';

@Module({
  controllers: [PayoutsController],
  providers: [PayoutsService, PrismaService],
})
export class PayoutsModule {}
