import { Injectable } from '@nestjs/common';

export interface Song {
  id: string;
  name: string;
}
@Injectable()
export class SongsService {
  //local db
  //local Array

  private readonly songs: Song[] = [] as Song[];

  create(song): Song[] {
    // save song in DB
    this.songs.push(song);
    return this.songs;
  }
  findAll() {
    // Fetch from DB
    return this.songs;
  }
}
