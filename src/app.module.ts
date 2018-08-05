import {Module, NestMiddleware} from '@nestjs/common';
import {TypeOrmModule} from '@nestjs/typeorm';
import {CatsModule} from './cats/cats.module';
import {Cat} from './cats/cat.entity';
import {MiddlewaresConsumer} from '@nestjs/common/interfaces/middlewares';
import {CorsMiddleware} from './interceptors/cors-interceptor';

@Module({
    imports: [
        TypeOrmModule.forRoot({
            type: 'mysql',
            host: 'localhost',
            port: 3306,
            username: 'root',
            password: '',
            database: 'cat',
            entities: [Cat],
            synchronize: true,
        }),
        CatsModule,
    ],
    providers: [],
    controllers: [],
})
export class AppModule implements NestMiddleware {
    // TODO: Why I need this.
    resolve() {
        return (req, res, next) => {
            next();
        };
    }

    configure(consumer: MiddlewaresConsumer): void {
        consumer.apply(CorsMiddleware).forRoutes(
            '/cat',
        );
    }
}

// {
//     type: 'postgres',
//         host: 'ec2-174-129-247-1.compute-1.amazonaws.com',
//     port: 5432,
//     username: 'gtnyspwkchcrmd',
//     password: 'e8500674f2ec064a6ff05da4c31e9fc6a8cfe8106cf853103342eff22ca820f1',
//     database: 'd6ijmuiq5u7fv9',
//     entities: [Cat],
//     extra: {
//     ssl: true,
// },
//     synchronize: true,
// }