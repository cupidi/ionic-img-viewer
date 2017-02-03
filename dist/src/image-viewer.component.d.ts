import { DomController, NavController, NavParams } from 'ionic-angular';
import { Ion } from 'ionic-angular/components/ion';
import { GestureController } from 'ionic-angular/gestures/gesture-controller';
import { Config } from 'ionic-angular/config/config';
import { Platform } from 'ionic-angular/platform/platform';
import { ElementRef, Renderer, OnInit, OnDestroy, NgZone } from '@angular/core';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
export declare class ImageViewerComponent extends Ion implements OnInit, OnDestroy {
    _gestureCtrl: GestureController;
    elementRef: ElementRef;
    private _nav;
    private _zone;
    private renderer;
    private domCtrl;
    private platform;
    imageUrl: SafeUrl;
    private dragGesture;
    private dblClickInAction;
    isZoomed: boolean;
    constructor(_gestureCtrl: GestureController, elementRef: ElementRef, _nav: NavController, _zone: NgZone, renderer: Renderer, domCtrl: DomController, platform: Platform, _navParams: NavParams, _config: Config, _sanitizer: DomSanitizer);
    ngOnInit(): void;
    ngOnDestroy(): void;
    onImageClick(): void;
    onImageDblClick(): void;
}
