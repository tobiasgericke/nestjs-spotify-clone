import { Body, 
         Controller, 
         Delete, 
         Get, 
         Param, 
         Post, 
         Put } from '@nestjs/common';
import { SongsService } from './songs.service';
import { CreateSongDTO } from './dto/create-song-dto';

@Controller('songs')
export class SongsController {
   constructor(private readonly songsService: SongsService) {}

   //POST
   @Post()
   create(@Body() createSongDTO: CreateSongDTO) {
      return this.songsService.create(createSongDTO);
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