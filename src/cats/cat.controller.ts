import {Body, Controller, Delete, Get, HttpStatus, Param, Post, Put, Req, Res} from '@nestjs/common';
import {CatService} from './cat.service';

@Controller('cat')
export class CatController {
    constructor(private readonly catService: CatService) {
    }

    @Get()
    findAll() {
        return this.catService.findAll();
    }

    @Get(':id')
    getCat(@Param('id') id) {
        return this.catService.getCat(id);
    }

    @Put(':id')
    updateCat(@Param('id') id, @Body() newCat) {
        return this.catService.updateCat(id, newCat);
    }

    @Post()
    async create(@Req() request, @Res() response) {
        try {
            return this.catService.create(request, response);
        } catch (err) {
            response.status(HttpStatus.BAD_REQUEST).json(err);
        }

    }

    @Delete(':id')
    delete(@Param('id') id) {
        return this.catService.deleteCat(id);
    }
}
