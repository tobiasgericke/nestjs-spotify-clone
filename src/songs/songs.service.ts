import { Injectable } from '@nestjs/common';

@Injectable()
export class SongsService {

    //local db
    //local array

    private readonly songs = [];

    create(song){
        //save song into db
        this.songs.push(song);
        return this.songs;
    }

    findAll(){
        //fetch song from db
        return this.songs;
    }

}

