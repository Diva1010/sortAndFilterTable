import { Directive, Input, ElementRef, Renderer, OnInit } from '@angular/core';

@Directive({
  selector: '[sort]'
})
export class SortDirective implements OnInit {

  @Input() data: any[];
  @Input('sortKey') key: any;
  private toggleSort: boolean = false;
  constructor(private el: ElementRef, private renderer: Renderer) { }

  ngOnInit(){
    this.renderer.listen(this.el.nativeElement, 'click', (event) => {
      let parentNode = this.el.nativeElement.parentNode;
      let children   = parentNode.children;

      if (this.data && this.key) {
        let sortedData: any = this.sortData();
      }
      this.toggleSort = !this.toggleSort;
    })
  }

  sortData(){
    let unsortedData: Array<any> = this.data;
    unsortedData.sort((a, b) => {
        let str1: string = a[this.key].toLowerCase();
        let str2: string = b[this.key].toLowerCase();
        if (this.toggleSort) {
          return (str1 < str2 ?  -1 : 1);
        }
        else {
          return (str1 > str2 ?  -1 : 1);
        }
      return 0;
    });
    return unsortedData;
  
  }
}
