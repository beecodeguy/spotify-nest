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

    //Let us say we get error getting songs from DB
    // And we did not added error handle logic
    throw new Error('Error in DB while fetching Data');
    return this.songs;
  }
}
