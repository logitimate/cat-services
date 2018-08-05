import {Body, Controller, Delete, Get, HttpStatus, Param, Post, Put, Req, Res} from '@nestjs/common';
import {CatService} from './cat.service';
import * as AWS from 'aws-sdk';

const AWS_S3_BUCKET_NAME = 'catpartycatphotos';
const s3 = new AWS.S3();
AWS.config.update({
    accessKeyId: 'AKIAJRKDOVLQEEGXZYRA',
    secretAccessKey: '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',
});

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
