import { ImageViewerComponent } from './image-viewer.component';
import { PanGesture } from 'ionic-angular/gestures/drag-gesture';
import { Platform } from 'ionic-angular/platform/platform';
import { DomController } from 'ionic-angular';
export declare class ImageViewerGesture extends PanGesture {
    private component;
    private cb;
    private translationY;
    private opacity;
    private startY;
    private imageContainer;
    private backdrop;
    constructor(platform: Platform, component: ImageViewerComponent, domCtrl: DomController, cb: Function);
    onDragStart(ev: any): boolean;
    canStart(): boolean;
    onDragMove(ev: any): boolean;
    onDragEnd(ev: any): boolean;
}
