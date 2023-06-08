"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.charsetConverter = void 0;
var iconv_lite_1 = __importDefault(require("iconv-lite"));
var jschardet_1 = __importDefault(require("jschardet"));
var codecTypes = [
    'UTF-8',
    'ascii',
    'ISO-8859-2',
];
var checkShiftJis = function (codec) {
    if (codec.match(/^(windows|Shift_JIS).*/)) {
        return 'Shift_JIS';
    }
    else {
        return codec;
    }
};
var charsetConverter = function (str) {
    var src = Buffer.from(str);
    var detected = jschardet_1.default.detect(src);
    if (codecTypes.some(function (codec) { return detected.encoding === codec; })) {
        return str.toString();
    }
    try {
        return iconv_lite_1.default.decode(src, checkShiftJis(detected.encoding));
    }
    catch (e) {
        console.warn(e);
        return str;
    }
};
exports.charsetConverter = charsetConverter;
//# sourceMappingURL=charsetConverter.js.map