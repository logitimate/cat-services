exports.id = "main";
exports.modules = {

/***/ "./src/app.module.ts":
/*!***************************!*\
  !*** ./src/app.module.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {\n    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;\n    if (typeof Reflect === \"object\" && typeof Reflect.decorate === \"function\") r = Reflect.decorate(decorators, target, key, desc);\n    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;\n    return c > 3 && r && Object.defineProperty(target, key, r), r;\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nconst common_1 = __webpack_require__(/*! @nestjs/common */ \"@nestjs/common\");\nconst typeorm_1 = __webpack_require__(/*! @nestjs/typeorm */ \"@nestjs/typeorm\");\nconst cats_module_1 = __webpack_require__(/*! ./cats/cats.module */ \"./src/cats/cats.module.ts\");\nconst cat_entity_1 = __webpack_require__(/*! ./cats/cat.entity */ \"./src/cats/cat.entity.ts\");\nconst cors_interceptor_1 = __webpack_require__(/*! ./interceptors/cors-interceptor */ \"./src/interceptors/cors-interceptor.ts\");\nconst cat_photo_service_1 = __webpack_require__(/*! ./cat-photo/cat-photo.service */ \"./src/cat-photo/cat-photo.service.ts\");\nconst cat_photo_controller_1 = __webpack_require__(/*! ./cat-photo/cat-photo.controller */ \"./src/cat-photo/cat-photo.controller.ts\");\nlet AppModule = class AppModule {\n    configure(consumer) {\n        consumer.apply(cors_interceptor_1.CorsMiddleware).forRoutes('/cat');\n    }\n};\nAppModule = __decorate([\n    common_1.Module({\n        imports: [\n            typeorm_1.TypeOrmModule.forRoot({\n                type: 'mysql',\n                host: 'localhost',\n                port: 3306,\n                username: 'root',\n                password: '',\n                database: 'cat',\n                entities: [cat_entity_1.Cat],\n                synchronize: true,\n            }),\n            cats_module_1.CatsModule,\n        ],\n        providers: [cat_photo_service_1.CatPhotoService],\n        controllers: [cat_photo_controller_1.CatPhotoController],\n    })\n], AppModule);\nexports.AppModule = AppModule;\n\n\n//# sourceURL=webpack:///./src/app.module.ts?");

/***/ }),

/***/ "./src/cat-photo/cat-photo.service.ts":
/*!********************************************!*\
  !*** ./src/cat-photo/cat-photo.service.ts ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {\n    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;\n    if (typeof Reflect === \"object\" && typeof Reflect.decorate === \"function\") r = Reflect.decorate(decorators, target, key, desc);\n    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;\n    return c > 3 && r && Object.defineProperty(target, key, r), r;\n};\nvar __metadata = (this && this.__metadata) || function (k, v) {\n    if (typeof Reflect === \"object\" && typeof Reflect.metadata === \"function\") return Reflect.metadata(k, v);\n};\nvar __param = (this && this.__param) || function (paramIndex, decorator) {\n    return function (target, key) { decorator(target, key, paramIndex); }\n};\nvar __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {\n    return new (P || (P = Promise))(function (resolve, reject) {\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\n        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\n    });\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nconst common_1 = __webpack_require__(/*! @nestjs/common */ \"@nestjs/common\");\nlet CatPhotoService = class CatPhotoService {\n    constructor() {\n        this.upload = multer({\n            storage: multerS3({\n                s3: s3,\n                bucket: AWS_S3_BUCKET_NAME,\n                acl: 'public-read',\n                key: function (request, file, cb) {\n                    cb(null, `${Date.now().toString()} - ${file.originalname}`);\n                },\n            }),\n        }).array('upload', 1);\n    }\n    fileupload(req, res) {\n        return __awaiter(this, void 0, void 0, function* () {\n            try {\n                this.upload(req, res, function (error) {\n                    if (error) {\n                        console.log(error);\n                        return res.status(404).json(`Failed to upload image file: ${error}`);\n                    }\n                    return res.status(201).json(req.files[0].location);\n                });\n            }\n            catch (error) {\n                console.log(error);\n                return res.status(500).json(`Failed to upload image file: ${error}`);\n            }\n        });\n    }\n};\n__decorate([\n    __param(0, common_1.Req()), __param(1, common_1.Res()),\n    __metadata(\"design:type\", Function),\n    __metadata(\"design:paramtypes\", [Object, Object]),\n    __metadata(\"design:returntype\", Promise)\n], CatPhotoService.prototype, \"fileupload\", null);\nCatPhotoService = __decorate([\n    common_1.Injectable()\n], CatPhotoService);\nexports.CatPhotoService = CatPhotoService;\n\n\n//# sourceURL=webpack:///./src/cat-photo/cat-photo.service.ts?");

/***/ })

};