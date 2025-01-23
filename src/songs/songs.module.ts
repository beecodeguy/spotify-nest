import { Module } from '@nestjs/common';
import { SongsController } from './songs.controller';
import { SongsService } from './songs.service';

const mockSongService = {
  findAll() {
    return [{ id: 1, title: 'Little Girl' }];
  },
};

@Module({
  controllers: [SongsController],
  providers: [
    // SongsService
    {
      provide: SongsService,
      useClass: SongsService,
    },
    { provide: SongsService, useValue: mockSongService },
  ],
})
export class SongsModule {}
