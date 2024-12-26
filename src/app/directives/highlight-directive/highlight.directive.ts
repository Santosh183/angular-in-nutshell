import { Directive, ElementRef, HostBinding, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appHighlight]',
  standalone: true
})
export class HighlightDirective {
  @Input() appHighlight = '#fff';
  @Input() defaultBackground = '#fff';

  constructor(private el: ElementRef) {
    this.background = this.appHighlight;
  }

  @HostBinding('style.backgroundColor') background: string;
  @HostListener('mouseenter') onMouseEnter() {
    this.highlight(this.appHighlight);
  }
  @HostListener('mouseleave') onMouseLeave() {
    this.highlight(this.defaultBackground);
  }

  private highlight(color: string) {
    // this.el.nativeElement.style.backgroundColor = color; // alternative without hostbinding
    this.background = color;
  }

}
