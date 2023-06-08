/// <reference types="node" />
/// <reference types="node" />
import { AxiosRequestConfig } from 'axios';
export declare const getContents: (url: string, config?: AxiosRequestConfig) => Promise<string | Buffer>;
