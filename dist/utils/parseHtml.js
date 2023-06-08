"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.parseHtml = void 0;
var cheerio = __importStar(require("cheerio"));
var extractData = function ($meta, _a) {
    var key = _a[0], contentKey = _a[1];
    var prop = $meta.attr(key);
    var content = $meta.attr(contentKey);
    if (prop && content) {
        return {
            prop: prop,
            content: content
        };
    }
};
var parseHtml = function (html) {
    var $ = cheerio.load(html);
    var $metas = $('head meta');
    var $link = $('head link');
    var title = $('head title').text();
    var ogpSet = {};
    var seoSet = {};
    $metas.each(function (index, value) {
        var _a, _b;
        var ogp = extractData($(value), ['property', 'content']);
        var seo = extractData($(value), ['name', 'content']);
        if (ogp) {
            var prop = ogp.prop, content = ogp.content;
            ogpSet[prop] = (_a = ogpSet[prop]) !== null && _a !== void 0 ? _a : [];
            ogpSet[prop].push(content);
        }
        else if (seo) {
            var prop = seo.prop, content = seo.content;
            seoSet[prop] = (_b = seoSet[prop]) !== null && _b !== void 0 ? _b : [];
            seoSet[prop].push(content);
        }
    });
    var oembedJsonTag = $link.filter(function (_, val) { return $(val).attr('type') === 'application/json+oembed'; });
    var oembedXmlTag = $link.filter(function (_, val) { return $(val).attr('type') === 'text/xml+oembed'; });
    var oembedInfo = undefined;
    if (oembedJsonTag.length > 0) {
        var url = oembedJsonTag.attr('href');
        if (url) {
            oembedInfo = {
                type: 'json',
                url: url
            };
        }
    }
    else if (oembedXmlTag.length > 0 && oembedXmlTag.attr('href')) {
        oembedXmlTag.attr('href');
        var url = oembedXmlTag.attr('href');
        if (url) {
            oembedInfo = {
                type: 'xml',
                url: url
            };
        }
    }
    return {
        title: title,
        ogp: ogpSet,
        seo: seoSet,
        oembedInfo: oembedInfo
    };
};
exports.parseHtml = parseHtml;
//# sourceMappingURL=parseHtml.js.map