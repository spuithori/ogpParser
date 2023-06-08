"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var charsetConverter_1 = require("../../utils/charsetConverter");
var fs_1 = __importDefault(require("fs"));
var path_1 = __importDefault(require("path"));
var eucJP = fs_1.default.readFileSync(path_1.default.join(__dirname, '../fixture/euc_jp.txt'));
var shiftJIS = fs_1.default.readFileSync(path_1.default.join(__dirname, '../fixture/shiftjis.txt'));
var utf8 = fs_1.default.readFileSync(path_1.default.join(__dirname, '../fixture/utf8.txt'));
var ascii = fs_1.default.readFileSync(path_1.default.join(__dirname, '../fixture/ascii.txt'));
describe('charsetConverter test', function () {
    it('Check ascii', function () {
        var decodedText = (0, charsetConverter_1.charsetConverter)(ascii);
        expect(decodedText).toBe('abcdefg');
    });
    it('Check utf8', function () {
        var decodedText = (0, charsetConverter_1.charsetConverter)(utf8);
        expect(decodedText).toBe('あいうえお');
    });
    it('Check shift-jis', function () {
        var decodedText = (0, charsetConverter_1.charsetConverter)(shiftJIS);
        expect(decodedText).toBe('あいうえお');
    });
    it('Check euc_jp', function () {
        var decodedText = (0, charsetConverter_1.charsetConverter)(eucJP);
        expect(decodedText).toBe('あいうえお');
    });
});
//# sourceMappingURL=charsetConverter.spec.js.map