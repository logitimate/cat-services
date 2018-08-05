import {Injectable, Req, Res} from '@nestjs/common';
import {Repository} from 'typeorm';
import {InjectRepository} from '@nestjs/typeorm';
import {Cat} from './cat.entity';
import * as AWS from 'aws-sdk';
import * as multer from 'multer';
import * as multerS3 from 'multer-s3';
import {environment} from '../../env';

const AWS_S3_BUCKET_NAME = 'catpartycatphotos';
const s3 = new AWS.S3();
AWS.config.update({
    accessKeyId: environment.accessKeyId,
    secretAccessKey: environment.secretAccessKey,
});

@Injectable()
export class CatService {
    constructor(@InjectRepository(Cat)
                private readonly catRepo: Repository<Cat>) {
    }

    upload = multer({
        storage: multerS3({
            s3: s3,
            bucket: AWS_S3_BUCKET_NAME,
            acl: 'public-read',
            key: (request, file, cb) => {
                cb(null, `${Date.now().toString()} - ${file.originalname}`);
            },
        }),
    }).array('file', 1);

    async findAll(): Promise<Cat[]> {
        return await this.catRepo.find();
    }

    async getCat(id: number): Promise<Cat> {
        return await this.catRepo.findOne(id);
    }

    async updateCat(id: number, cat: Cat): Promise<any> {
        try {
            const currentCat: Cat = await this.catRepo.findOne(id);
            Object.assign(currentCat, cat);
            return await this.catRepo.save(currentCat);
        } catch (err) {
            return err;
        }

    }

    async create(@Req() req, @Res() res): Promise<any> {
        // TODO: CJ help.
        await this.upload(req, res, error => {
            if (error)
                return res.status(404).json(`Failed to upload image file: ${error}`);

            const newCat: Cat = {...req.body, image: req.files[0].location} as Cat;
            try {
                this.catRepo.save(newCat);
            } catch (err) {
                return res.status(500).json(`Failed to upload image file: ${error}`);
            }
            return res.status(201).json(newCat);
        });
    }

    async deleteCat(catId: number): Promise<Cat> {
        try {
            const catToRemove = await this.catRepo.findOne(catId);
            return this.catRepo.remove(catToRemove);
        } catch (err) {
            return err;
        }
    }
}
