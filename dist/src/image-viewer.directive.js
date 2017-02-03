import { App } from 'ionic-angular';
import { ElementRef, HostListener, Directive, Input } from '@angular/core';
import { ImageViewer } from './image-viewer';
export var ImageViewerDirective = (function () {
    function ImageViewerDirective(_app, _el) {
        this._app = _app;
        this._el = _el;
    }
    ImageViewerDirective.prototype.onClick = function ($event) {
        var position = this._el.nativeElement.getBoundingClientRect();
        var imageViewer = ImageViewer.create({ image: this.src || this._el.nativeElement.src, position: position });
        this._app.present(imageViewer, {});
    };
    ImageViewerDirective.decorators = [
        { type: Directive, args: [{
                    selector: '[imageViewer]'
                },] },
    ];
    /** @nocollapse */
    ImageViewerDirective.ctorParameters = [
        { type: App, },
        { type: ElementRef, },
    ];
    ImageViewerDirective.propDecorators = {
        'src': [{ type: Input, args: ['imageViewer',] },],
        'onClick': [{ type: HostListener, args: ['click', ['$event.target'],] },],
    };
    return ImageViewerDirective;
}());
//# sourceMappingURL=image-viewer.directive.js.map