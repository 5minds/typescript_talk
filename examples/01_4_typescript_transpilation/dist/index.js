"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
class MyBasicClass {
    doSomething(anything) {
        return __awaiter(this, void 0, void 0, function* () {
            // Diese Überprüfungen brauchen wir zur Design Time nicht mehr
            // if (!anything) {
            //   throw new Error('give me something');
            // }
            // if (typeof anything !== 'string') {
            //   throw new Error('give me something else');
            // }
            console.log(`did something: ${anything}`);
        });
    }
}
exports.MyBasicClass = MyBasicClass;
const myClass = new MyBasicClass();
myClass.doSomething('say hello');
//# sourceMappingURL=index.js.map