import { Module, OnApplicationBootstrap } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';
import { StylesModule } from './styles/styles.module';
import { StylesController } from './styles/styles.controller';
import { StylesService } from './styles/styles.service';
import { ContentsModule } from './contents/contents.module';
import { CommonsModule } from './commons/commons.module';
import { CommonsController } from './commons/commons.controller';
import { ContentsController } from './contents/contents.controller';
import { CommonsService } from './commons/commons.service';
import { ContentsService } from './contents/contents.service';
import { SeederModule } from './seeder.module';
import { SeederService } from './seeder.service';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger'; 
import { PayoutsModule } from './payouts/payouts.module';
import { PayoutsService } from './payouts/payouts.service';

@Module({
  imports: [
    ContentsModule,
    CommonsModule,
    PrismaModule,
    SeederModule,
    StylesModule,
    PayoutsModule,
  ],
  controllers: [
    AppController, 
    CommonsController,
    ContentsController,
    StylesController,
  ],
  providers: [
    AppService, 
    CommonsService,
    ContentsService,
    PayoutsService,
    StylesService,
  ],
})
export class AppModule implements OnApplicationBootstrap {
  constructor(private readonly seederService: SeederService) {}

  async onApplicationBootstrap() {
    // Run the seeder when the application starts
    await this.seederService.seed();
  }

    configureSwagger(app) {
    const options = new DocumentBuilder()
      .setTitle('Your API Title')
      .setDescription('Your API Description')
      .setVersion('1.0')
      .addTag('your-tag') // Add tags for grouping endpoints
      .build();
    const document = SwaggerModule.createDocument(app, options);
    SwaggerModule.setup('api', app, document);
  }
}
