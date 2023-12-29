import { Module } from '@nestjs/common';
import { StylesService } from './styles.service';
import { StylesController } from './styles.controller';
import { PrismaModule } from 'src/prisma/prisma.module';


@Module({
  controllers: [StylesController],
  providers: [StylesService],
  imports: [PrismaModule],
})
export class StylesModule {}
