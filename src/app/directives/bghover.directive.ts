import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appBghover]'
})
export class BghoverDirective {

  constructor(private item: ElementRef) { }

  @HostListener('mouseenter') onMouseEnter() {
    this.hover('yellow')
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.hover('transparent');
  }

  private hover(background: string): void {
    this.item.nativeElement.style.backgroundColor = background;
  }

}
