import {NestMiddleware} from '@nestjs/common';

export class CorsMiddleware implements NestMiddleware {
    resolve() {
        return (req, res, next) => {
            res.header('Access-Control-Allow-Origin', '*');
            res.header('Access-Control-Allow-Methods', '*');
            next();
        };
    }
}