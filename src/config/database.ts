
import { PrismaClient } from '@prisma/client';
import { ConfigService } from '@nestjs/config';

import {
  Global,
  Inject,
  Module,
  forwardRef,
  Injectable,
  OnModuleInit,
  OnModuleDestroy,
  UnprocessableEntityException
} from '@nestjs/common';



@Injectable()
export class PrismaService
  extends PrismaClient
  implements OnModuleInit, OnModuleDestroy
{
  constructor(
    config: ConfigService,
  ) {
    super({
      datasources: {
        db: {
          url: config.get('DATABASE_URL')
        }
      }
    });
  }

  async onModuleInit() {
    await this.$connect();
    // await this.main();
  }

  async onModuleDestroy() {
    await this.$disconnect();
  }

}

      

@Global()
@Module({
  exports: [PrismaService],
  providers: [PrismaService]
})
export class PrismaModule {}
