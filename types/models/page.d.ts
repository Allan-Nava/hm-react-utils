import { Widget } from "./widget";
export declare type Page = {
    image_url: string;
    origin: string;
    page_id: number;
    title: string;
    style: string;
    url: string;
    entity: string;
    description: string;
    keywords: string;
    body: Widget[];
    context: any;
    jsonld: any;
};
