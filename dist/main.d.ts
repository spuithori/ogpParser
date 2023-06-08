import { ParseResult } from "./utils/parseHtml";
export type OgpParserOptions = {
    skipOembed: boolean;
};
export type OgpParserResult = Omit<ParseResult, 'oembedInfo'> & {
    oembed?: object;
};
declare const parser: (url: string, options?: OgpParserOptions) => Promise<OgpParserResult>;
export default parser;
