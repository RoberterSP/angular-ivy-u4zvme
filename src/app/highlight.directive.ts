import { Directive, ElementRef, HostListener, Input } from '@angular/core';
@Directive({
  selector: '[appHighlight]'
})
export class HighLightDirective {
  @Input('appHighlight') highlightColor: string;
  @Input() defaultColor: string;
  constructor(private el: ElementRef) {}
  @HostListener('mouseenter') onMouseEnter() {
    this.heighlight(this.highlightColor || this.defaultColor || 'yellow');
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.heighlight('');
  }
  private heighlight(color: string) {
    this.el.nativeElement.style.backgroundColor = color;
  }
}
