exports.id = "main";
exports.modules = {

/***/ "./src/app.module.ts":
/*!***************************!*\
  !*** ./src/app.module.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {\n    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;\n    if (typeof Reflect === \"object\" && typeof Reflect.decorate === \"function\") r = Reflect.decorate(decorators, target, key, desc);\n    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;\n    return c > 3 && r && Object.defineProperty(target, key, r), r;\n};\nvar __metadata = (this && this.__metadata) || function (k, v) {\n    if (typeof Reflect === \"object\" && typeof Reflect.metadata === \"function\") return Reflect.metadata(k, v);\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nconst common_1 = __webpack_require__(/*! @nestjs/common */ \"@nestjs/common\");\nconst typeorm_1 = __webpack_require__(/*! @nestjs/typeorm */ \"@nestjs/typeorm\");\nconst cats_module_1 = __webpack_require__(/*! ./cats/cats.module */ \"./src/cats/cats.module.ts\");\nconst cat_entity_1 = __webpack_require__(/*! ./cats/cat.entity */ \"./src/cats/cat.entity.ts\");\nlet AppModule = class AppModule {\n    constructor() {\n    }\n};\nAppModule = __decorate([\n    common_1.Module({\n        imports: [\n            typeorm_1.TypeOrmModule.forRoot({\n                type: 'postgres',\n                host: 'ec2-174-129-247-1.compute-1.amazonaws.com',\n                port: 5432,\n                username: 'gtnyspwkchcrmd',\n                password: 'e8500674f2ec064a6ff05da4c31e9fc6a8cfe8106cf853103342eff22ca820f1',\n                database: 'd6ijmuiq5u7fv9',\n                entities: [cat_entity_1.Cat],\n                extra: {\n                    ssl: true,\n                },\n                synchronize: true,\n            }),\n            cats_module_1.CatsModule,\n        ],\n    }),\n    __metadata(\"design:paramtypes\", [])\n], AppModule);\nexports.AppModule = AppModule;\n\n\n//# sourceURL=webpack:///./src/app.module.ts?");

/***/ }),

/***/ "./src/cats/cat.entity.ts":
/*!********************************!*\
  !*** ./src/cats/cat.entity.ts ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {\n    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;\n    if (typeof Reflect === \"object\" && typeof Reflect.decorate === \"function\") r = Reflect.decorate(decorators, target, key, desc);\n    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;\n    return c > 3 && r && Object.defineProperty(target, key, r), r;\n};\nvar __metadata = (this && this.__metadata) || function (k, v) {\n    if (typeof Reflect === \"object\" && typeof Reflect.metadata === \"function\") return Reflect.metadata(k, v);\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nconst typeorm_1 = __webpack_require__(/*! typeorm */ \"typeorm\");\nlet Cat = class Cat {\n};\n__decorate([\n    typeorm_1.PrimaryGeneratedColumn(),\n    __metadata(\"design:type\", Number)\n], Cat.prototype, \"id\", void 0);\n__decorate([\n    typeorm_1.Column({ length: 500 }),\n    __metadata(\"design:type\", String)\n], Cat.prototype, \"name\", void 0);\n__decorate([\n    typeorm_1.Column('text'),\n    __metadata(\"design:type\", String)\n], Cat.prototype, \"description\", void 0);\n__decorate([\n    typeorm_1.Column(),\n    __metadata(\"design:type\", Boolean)\n], Cat.prototype, \"longhair\", void 0);\n__decorate([\n    typeorm_1.Column(),\n    __metadata(\"design:type\", Boolean)\n], Cat.prototype, \"tail\", void 0);\n__decorate([\n    typeorm_1.Column(),\n    __metadata(\"design:type\", String)\n], Cat.prototype, \"sex\", void 0);\nCat = __decorate([\n    typeorm_1.Entity()\n], Cat);\nexports.Cat = Cat;\n\n\n//# sourceURL=webpack:///./src/cats/cat.entity.ts?");

/***/ })

};