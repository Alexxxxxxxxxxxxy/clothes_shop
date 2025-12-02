"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PayRequest = void 0;
var superagent_1 = __importDefault(require("superagent"));
var PayRequest = /** @class */ (function () {
    function PayRequest() {
    }
    PayRequest.prototype.upload = function (url, params, headers) {
        var _a;
        return __awaiter(this, void 0, void 0, function () {
            var result, error_1, err;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _b.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, superagent_1.default
                                .post(url)
                                .send(params)
                                .attach('file', params.pic_buffer, {
                                filename: '72fe0092be0cf9dd8420579cc954fb4e.jpg',
                                contentType: 'image/jpg',
                            })
                                .field('meta', JSON.stringify(params.fileinfo))];
                    case 1:
                        result = _b.sent();
                        return [2 /*return*/, {
                                status: result.status,
                                data: result.body,
                            }];
                    case 2:
                        error_1 = _b.sent();
                        err = JSON.parse(JSON.stringify(error_1));
                        return [2 /*return*/, {
                                status: err.status,
                                errRaw: err,
                                error: (_a = err === null || err === void 0 ? void 0 : err.response) === null || _a === void 0 ? void 0 : _a.text,
                            }];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    PayRequest.prototype.post = function (url, params, headers) {
        var _a;
        return __awaiter(this, void 0, void 0, function () {
            var result, error_2, err;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _b.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, superagent_1.default
                                .post(url)
                                .send(params)
                                .set(headers)];
                    case 1:
                        result = _b.sent();
                        return [2 /*return*/, {
                                status: result.status,
                                data: result.body,
                            }];
                    case 2:
                        error_2 = _b.sent();
                        err = JSON.parse(JSON.stringify(error_2));
                        return [2 /*return*/, {
                                status: err.status,
                                errRaw: err,
                                error: (_a = err === null || err === void 0 ? void 0 : err.response) === null || _a === void 0 ? void 0 : _a.text,
                            }];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    PayRequest.prototype.get = function (url, headers) {
        var _a;
        return __awaiter(this, void 0, void 0, function () {
            var result, data, error_3, err;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _b.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, superagent_1.default.get(url).set(headers)];
                    case 1:
                        result = _b.sent();
                        data = {};
                        if (result.type === 'text/plain') {
                            data = {
                                status: result.status,
                                data: result.text,
                            };
                        }
                        else {
                            data = {
                                status: result.status,
                                data: result.body,
                            };
                        }
                        return [2 /*return*/, data];
                    case 2:
                        error_3 = _b.sent();
                        err = JSON.parse(JSON.stringify(error_3));
                        return [2 /*return*/, {
                                status: err.status,
                                errRaw: err,
                                error: (_a = err === null || err === void 0 ? void 0 : err.response) === null || _a === void 0 ? void 0 : _a.text,
                            }];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    return PayRequest;
}());
exports.PayRequest = PayRequest;
