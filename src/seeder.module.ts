
import { PrismaModule } from './prisma/prisma.module';
import { Module } from '@nestjs/common';
import { SeederService } from './seeder.service';

@Module({
  imports: [PrismaModule], 
  providers: [SeederService],
  exports: [SeederService],
})
export class SeederModule {}
