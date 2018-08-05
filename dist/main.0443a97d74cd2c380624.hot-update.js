exports.id = "main";
exports.modules = {

/***/ "./src/cat-photo/cat-photo.module.ts":
/*!*******************************************!*\
  !*** ./src/cat-photo/cat-photo.module.ts ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {\n    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;\n    if (typeof Reflect === \"object\" && typeof Reflect.decorate === \"function\") r = Reflect.decorate(decorators, target, key, desc);\n    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;\n    return c > 3 && r && Object.defineProperty(target, key, r), r;\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nconst common_1 = __webpack_require__(/*! @nestjs/common */ \"@nestjs/common\");\nlet CatPhotoModule = class CatPhotoModule {\n};\nCatPhotoModule = __decorate([\n    common_1.Module({\n        controllers: [ImageUploadController],\n        providers: [ImageUploadService],\n        exports: [ImageUploadService],\n    })\n], CatPhotoModule);\nexports.CatPhotoModule = CatPhotoModule;\n\n\n//# sourceURL=webpack:///./src/cat-photo/cat-photo.module.ts?");

/***/ })

};