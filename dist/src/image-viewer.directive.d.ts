import { App } from 'ionic-angular';
import { ElementRef } from '@angular/core';
export declare class ImageViewerDirective {
    private _app;
    private _el;
    src: string;
    constructor(_app: App, _el: ElementRef);
    onClick($event: any): void;
}