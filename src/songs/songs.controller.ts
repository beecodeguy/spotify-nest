import {
  Body,
  Controller,
  Delete,
  Get,
  HttpException,
  HttpStatus,
  Param,
  ParseIntPipe,
  Post,
  Put,
} from '@nestjs/common';
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
    try {
      return this.songsService.findAll();
    } catch {
      throw new HttpException('server Error', HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }
  @Get(':id')
  findOne(
    @Param(
      'id',
      new ParseIntPipe({ errorHttpStatusCode: HttpStatus.NOT_ACCEPTABLE }),
    )
    id: number,
  ) {
    return `Fetch Song based on id ${typeof id}`;
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
