type SeoItem = {
    [key: string]: string[];
};
type OgpItem = {
    [key: string]: string[];
};
type OEmbedItem = {
    type: 'json' | 'xml';
    url: string;
};
export type ParseResult = {
    title: string;
    ogp: OgpItem;
    seo: SeoItem;
    oembedInfo?: OEmbedItem;
};
export declare const parseHtml: (html: string) => ParseResult;
export {};
