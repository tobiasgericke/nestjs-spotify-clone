import { Injectable } from '@nestjs/common';

@Injectable()
export class SongsService {

    //local db
    //local array

    private readonly songs = [];

    create(song){
        this.songs.push(song);
        return this.songs;
    }

    findAll(){
        return this.songs;
    }

}
