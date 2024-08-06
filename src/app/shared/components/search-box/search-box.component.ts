import { Component, ElementRef, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'shared-search-box',
  templateUrl: './search-box.component.html',
  styles: ``
})
export class SearchBoxComponent {  

  @Input()
  public placeholder:string = ""

  @Output()
  onvalue = new EventEmitter<string>()

  public searchInput(value:string){
    this.onvalue.emit(value)      
  } 
  
}
