import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Content } from '../../entities/Content';
import { ContentService } from './content.service';
import { ContentController } from './content.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Content])],
  providers: [ContentService],
  controllers: [ContentController],
})
export class ContentModule {}
