import { Directive, ElementRef, Input, OnChanges, SimpleChanges, inject } from '@angular/core';

@Directive({
  selector: '[appHighlightCompletedTodo]'
})
export class HighlightCompletedTodoDirective implements OnChanges {
  @Input() isCompleted:boolean = false
  el = inject(ElementRef)

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['isCompleted']) {
      this.applyStyles();
    }
  }
  applyStyles(){
    if (this.isCompleted) {
      this.el.nativeElement.style.textDecoration = 'line-through';
      this.el.nativeElement.style.backgroundColor = '#d4f9d8';
      this.el.nativeElement.style.color = '#6c757d'   
    } else {
      this.el.nativeElement.style.textDecoration = 'none';
      this.el.nativeElement.style.backgroundColor ='#fff';
      this.el.nativeElement.style.color= '#000';
    }
  }
  constructor() { }

}
