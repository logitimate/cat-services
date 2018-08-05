exports.id = "main";
exports.modules = {

/***/ "./src/app.module.ts":
/*!***************************!*\
  !*** ./src/app.module.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {\n    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;\n    if (typeof Reflect === \"object\" && typeof Reflect.decorate === \"function\") r = Reflect.decorate(decorators, target, key, desc);\n    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;\n    return c > 3 && r && Object.defineProperty(target, key, r), r;\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nconst common_1 = __webpack_require__(/*! @nestjs/common */ \"@nestjs/common\");\nconst typeorm_1 = __webpack_require__(/*! @nestjs/typeorm */ \"@nestjs/typeorm\");\nconst cats_module_1 = __webpack_require__(/*! ./cats/cats.module */ \"./src/cats/cats.module.ts\");\nconst cat_entity_1 = __webpack_require__(/*! ./cats/cat.entity */ \"./src/cats/cat.entity.ts\");\nconst cors_interceptor_1 = __webpack_require__(/*! ./interceptors/cors-interceptor */ \"./src/interceptors/cors-interceptor.ts\");\nlet AppModule = class AppModule {\n    resolve() {\n        return (req, res, next) => {\n            next();\n        };\n    }\n    configure(consumer) {\n        consumer.apply(cors_interceptor_1.CorsMiddleware).forRoutes('/cat');\n    }\n};\nAppModule = __decorate([\n    common_1.Module({\n        imports: [\n            typeorm_1.TypeOrmModule.forRoot({\n                type: 'mysql',\n                host: 'localhost',\n                port: 3306,\n                username: 'root',\n                password: '',\n                database: 'cat',\n                entities: [cat_entity_1.Cat],\n                synchronize: true,\n            }),\n            cats_module_1.CatsModule,\n        ],\n        providers: [],\n        controllers: [],\n    })\n], AppModule);\nexports.AppModule = AppModule;\n\n\n//# sourceURL=webpack:///./src/app.module.ts?");

/***/ })

};