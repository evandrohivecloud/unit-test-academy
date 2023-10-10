import { Directive, ElementRef, HostListener, Renderer2, Input } from '@angular/core';

@Directive({
    selector: '[appDarkenOnHover]'
})
export class DarkenOnHoverDirective {

    @Input() brightness = '70%';

    constructor(
        private el: ElementRef,
        private renderer: Renderer2
    ) {}

    @HostListener('mouseover')
    darkenOn() {
        this.renderer.setStyle(this.el.nativeElement, 'filter', `brightness(${this.brightness})`);
    }

    @HostListener('mouseleave')
    darkenOff() {
        this.renderer.setStyle(this.el.nativeElement, 'filter', 'brightness(100%)');
    }
}
