import { Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { SongsService } from './songs.service';

   @Controller('songs')
   export class SongsController {
    constructor(private readonly songsService: SongsService) {}

    //POST
    @Post(':id')
    create() {
        return this.songsService.create('Animals by Martin Garrix');
    }

    //GET
     @Get()
     findAll() {
        return this.songsService.findAll();
     }

     @Get(':id')
     findOne(@Param('id') id: string) {
       return `find one song with id ${id}`;
     }

     //UPDATE
     @Put(':id')
     update() {
        return 'update song based on id';
     }

     //DELETE
     @Delete(':id')
     delete() {
        return 'delete song based on id';
     }
   }