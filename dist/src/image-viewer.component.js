var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
import { DomController, NavController, NavParams } from 'ionic-angular';
import { Ion } from 'ionic-angular/components/ion';
import { GestureController } from 'ionic-angular/gestures/gesture-controller';
import { Config } from 'ionic-angular/config/config';
import { Platform } from 'ionic-angular/platform/platform';
import { ElementRef, Renderer, Component, NgZone } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { ImageViewerGesture } from './image-viewer-gesture';
var DOUBLE_TAP_INTERVAL = 300;
export var ImageViewerComponent = (function (_super) {
    __extends(ImageViewerComponent, _super);
    function ImageViewerComponent(_gestureCtrl, elementRef, _nav, _zone, renderer, domCtrl, platform, _navParams, _config, _sanitizer) {
        _super.call(this, _config, elementRef, renderer);
        this._gestureCtrl = _gestureCtrl;
        this.elementRef = elementRef;
        this._nav = _nav;
        this._zone = _zone;
        this.renderer = renderer;
        this.domCtrl = domCtrl;
        this.platform = platform;
        var url = _navParams.get('image');
        this.imageUrl = _sanitizer.bypassSecurityTrustUrl(url);
    }
    ImageViewerComponent.prototype.ngOnInit = function () {
        var _this = this;
        var gestureCallBack = function () { return _this._nav.pop(); };
        this._zone.runOutsideAngular(function () { return _this.dragGesture = new ImageViewerGesture(_this.platform, _this, _this.domCtrl, gestureCallBack); });
    };
    ImageViewerComponent.prototype.ngOnDestroy = function () {
        this.dragGesture && this.dragGesture.destroy();
    };
    ImageViewerComponent.prototype.onImageClick = function () {
        var _this = this;
        if (this.dblClickInAction) {
            this.onImageDblClick();
        }
        else {
            this.dblClickInAction = true;
            setTimeout(function () { return _this.dblClickInAction = false; }, DOUBLE_TAP_INTERVAL);
        }
    };
    ImageViewerComponent.prototype.onImageDblClick = function () {
        this.isZoomed = !this.isZoomed;
        this.renderer.setElementClass(this.getNativeElement(), 'zoom', this.isZoomed);
    };
    ImageViewerComponent.decorators = [
        { type: Component, args: [{
                    selector: 'image-viewer',
                    template: "\n\t\t<ion-header>\n\t\t\t<ion-navbar>\n\t\t\t</ion-navbar>\n\t\t</ion-header>\n\n\t\t<ion-backdrop></ion-backdrop>\n\n\t\t<div class=\"image-wrapper\">\n\t\t\t<div class=\"image\">\n\t\t\t\t<img [src]=\"imageUrl\" (click)=\"onImageClick()\" tappable />\n\t\t\t</div>\n\t\t</div>\n\t"
                },] },
    ];
    /** @nocollapse */
    ImageViewerComponent.ctorParameters = [
        { type: GestureController, },
        { type: ElementRef, },
        { type: NavController, },
        { type: NgZone, },
        { type: Renderer, },
        { type: DomController, },
        { type: Platform, },
        { type: NavParams, },
        { type: Config, },
        { type: DomSanitizer, },
    ];
    return ImageViewerComponent;
}(Ion));
//# sourceMappingURL=image-viewer.component.js.map