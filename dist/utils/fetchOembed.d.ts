import { ParseResult } from './parseHtml';
type OembedInfo = Required<ParseResult>['oembedInfo'];
export declare const fetchOembed: ({ type, url }: OembedInfo) => Promise<object | null | undefined>;
export {};
