import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appZoom]'
})

export class ZoomDirective {

  constructor(private item: ElementRef) { }

  @HostListener('mouseenter') onMouseEnter() {
    this.zoomIn('scale(1.1)');
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.zoomIn('none');
  }

  private zoomIn(transform: string): void {
    this.item.nativeElement.style.transform = transform;
  }

}
