import { Module } from '@nestjs/common';
import { PrismaModule } from 'src/config/database';
import { AbilityFactory } from './ability.factory';

@Module({
    imports:[PrismaModule],
    providers:[AbilityFactory],
    exports:[AbilityFactory]
})
export class AbilityModule {}
