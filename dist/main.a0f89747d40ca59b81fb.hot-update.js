exports.id = "main";
exports.modules = {

/***/ "./src/cat-photo/cat-photo.controller.ts":
/*!***********************************************!*\
  !*** ./src/cat-photo/cat-photo.controller.ts ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {\n    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;\n    if (typeof Reflect === \"object\" && typeof Reflect.decorate === \"function\") r = Reflect.decorate(decorators, target, key, desc);\n    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;\n    return c > 3 && r && Object.defineProperty(target, key, r), r;\n};\nvar __metadata = (this && this.__metadata) || function (k, v) {\n    if (typeof Reflect === \"object\" && typeof Reflect.metadata === \"function\") return Reflect.metadata(k, v);\n};\nvar __param = (this && this.__param) || function (paramIndex, decorator) {\n    return function (target, key) { decorator(target, key, paramIndex); }\n};\nvar __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {\n    return new (P || (P = Promise))(function (resolve, reject) {\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\n        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\n    });\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nconst common_1 = __webpack_require__(/*! @nestjs/common */ \"@nestjs/common\");\nlet CatPhotoController = class CatPhotoController {\n    create(request, response) {\n        return __awaiter(this, void 0, void 0, function* () {\n            try {\n                yield this.imageUploadService.fileupload(request, response);\n            }\n            catch (error) {\n                return response\n                    .status(500)\n                    .json(`Failed to upload image file: ${error.message}`);\n            }\n        });\n    }\n};\n__decorate([\n    Post(),\n    __param(0, common_1.Req()), __param(1, common_1.Res()),\n    __metadata(\"design:type\", Function),\n    __metadata(\"design:paramtypes\", [Object, Object]),\n    __metadata(\"design:returntype\", Promise)\n], CatPhotoController.prototype, \"create\", null);\nCatPhotoController = __decorate([\n    common_1.Controller('cat-photo')\n], CatPhotoController);\nexports.CatPhotoController = CatPhotoController;\n\n\n//# sourceURL=webpack:///./src/cat-photo/cat-photo.controller.ts?");

/***/ }),

/***/ "./src/cats/cat-photo.service.ts":
/*!***************************************!*\
  !*** ./src/cats/cat-photo.service.ts ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {\n    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;\n    if (typeof Reflect === \"object\" && typeof Reflect.decorate === \"function\") r = Reflect.decorate(decorators, target, key, desc);\n    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;\n    return c > 3 && r && Object.defineProperty(target, key, r), r;\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nconst common_1 = __webpack_require__(/*! @nestjs/common */ \"@nestjs/common\");\nlet CatPhotoService = class CatPhotoService {\n};\nCatPhotoService = __decorate([\n    common_1.Injectable()\n], CatPhotoService);\nexports.CatPhotoService = CatPhotoService;\n\n\n//# sourceURL=webpack:///./src/cats/cat-photo.service.ts?");

/***/ })

};