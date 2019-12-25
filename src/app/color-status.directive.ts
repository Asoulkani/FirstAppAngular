import { Directive, ElementRef, Renderer2, HostListener, Input, SimpleChanges } from '@angular/core';

@Directive({
  selector: '[appColorStatus]'
})
export class ColorStatusDirective {


  @Input('appColorStatus') status: number;

  constructor(private el: ElementRef) {

  }

  ngOnChanges(changes: SimpleChanges): void {
    let color: string;
    switch (this.status) {
      case 1:
        color = 'orange';
        break;

      case 2:
        color = 'green';
        break;

      case -1:
        color = 'red';
        break;

      default:
        color = 'none';
        break;
    }
    this.el.nativeElement.style.backgroundColor = color;
  }


}