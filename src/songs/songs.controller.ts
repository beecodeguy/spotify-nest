import { Body, Controller, Delete, Get, Post, Put } from '@nestjs/common';
import { Song } from './songs.service';
import { SongsService } from './songs.service';
import { CreateSongDTO } from './dto/create-new-song-dto';

@Controller('songs')
export class SongsController {
  constructor(private songsService: SongsService) {}
  @Post()
  create(@Body() createSongDTO: CreateSongDTO) {
    return this.songsService.create(createSongDTO);
  }
  @Get()
  findAll(): Song[] {
    return this.songsService.findAll();
  }
  @Get(':id')
  findOne() {
    return 'Fetch Song based on id';
  }

  @Put(':id')
  update() {
    return 'update Song based on id';
  }

  @Delete(':id')
  delete() {
    return 'delete Song based on id';
  }
}
