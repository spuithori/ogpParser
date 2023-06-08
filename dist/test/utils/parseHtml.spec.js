"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var parseHtml_1 = require("../../utils/parseHtml");
var fs_1 = __importDefault(require("fs"));
var path_1 = __importDefault(require("path"));
var html = fs_1.default.readFileSync(path_1.default.join(__dirname, '../fixture/demo.html'), 'utf-8');
var htmlOembed = fs_1.default.readFileSync(path_1.default.join(__dirname, '../fixture/demo_oembed.html'), 'utf-8');
var htmlOembedXml = fs_1.default.readFileSync(path_1.default.join(__dirname, '../fixture/demo_oembed_xml.html'), 'utf-8');
describe('parseHtml test', function () {
    it('ogp values check', function () {
        var ogp = (0, parseHtml_1.parseHtml)(html).ogp;
        expect(ogp['og:title'][0]).toBe('このHTMLはテスト用です。');
        expect(ogp['og:type'][0]).toBe('website');
        expect(ogp['og:url'][0]).toBe('http://example.com');
        expect(ogp['og:image'].length).toBe(2);
        expect(ogp['og:image'][0]).toBe('http://hoge.example.com/test1.jpg');
        expect(ogp['og:image'][1]).toBe('http://hoge.example.com/test2.jpg');
        expect(ogp['fb:admins'][0]).toBe('XXXXXXXXXX');
        expect(ogp['fb:app_id'][0]).toBe('YYYYYYYYYY');
    });
    it('seo values check', function () {
        var seo = (0, parseHtml_1.parseHtml)(html).seo;
        expect(seo['viewport'][0]).toBe('width=device-width,initial-scale=1');
        expect(seo['description'][0]).toBe('テストDescription');
    });
    it('oembed tag check', function () {
        var oembedMiss = (0, parseHtml_1.parseHtml)(html).oembedInfo;
        var oembedInfo = (0, parseHtml_1.parseHtml)(htmlOembed).oembedInfo;
        var oembedInfoXML = (0, parseHtml_1.parseHtml)(htmlOembedXml).oembedInfo;
        expect(oembedMiss).toBeUndefined();
        expect(oembedInfo === null || oembedInfo === void 0 ? void 0 : oembedInfo.type).toBe('json');
        expect(oembedInfo === null || oembedInfo === void 0 ? void 0 : oembedInfo.url).toBe('https://oembed.example.com/jsondata');
        expect(oembedInfoXML === null || oembedInfoXML === void 0 ? void 0 : oembedInfoXML.type).toBe('xml');
        expect(oembedInfoXML === null || oembedInfoXML === void 0 ? void 0 : oembedInfoXML.url).toBe('https://oembed.example.com/xmldata');
    });
});
//# sourceMappingURL=parseHtml.spec.js.map