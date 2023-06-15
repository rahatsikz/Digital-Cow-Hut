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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const app_1 = __importDefault(require("./app"));
const index_1 = __importDefault(require("./config/index"));
function mainFunc() {
    return __awaiter(this, void 0, void 0, function* () {
        // 4. Connect to MongoDB
        yield (0, mongoose_1.connect)("mongodb://127.0.0.1:27017/test");
        try {
            yield (0, mongoose_1.connect)(index_1.default.database_url);
            console.log("🔋 Database Connecte");
            app_1.default.listen(index_1.default.port, () => {
                console.log(`Digital Cow Hut listening on port ${index_1.default.port}`);
            });
        }
        catch (error) {
            console.log(error);
        }
    });
}
mainFunc();