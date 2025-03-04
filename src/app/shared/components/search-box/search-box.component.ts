import { Component,  EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { debounceTime, Subject, Subscription } from 'rxjs';

@Component({
  selector: 'shared-search-box',
  templateUrl: './search-box.component.html',
  styles: ``
})
export class SearchBoxComponent implements OnInit, OnDestroy {  
  private debouncer = new Subject<string>();
  private debouncerSuscription?: Subscription 

  @Input()
  public placeholder:string = ""
  @Input()
  public initialValue:string = ""

  @Output()
  onvalue = new EventEmitter<string>()
  @Output()
  onDebounce = new EventEmitter<string>()

  ngOnInit(): void {
    this.debouncerSuscription = this.debouncer
    .pipe(
      debounceTime(300)
    )
    .subscribe( value => this.onDebounce.emit(value))
  }
  ngOnDestroy(): void {    
    this.debouncerSuscription?.unsubscribe()
  }

  public emitValue(value:string){
    this.onvalue.emit(value)      
  } 
  onKeyPress(searchTerm:string){
    this.debouncer.next(searchTerm)
  }
  
}
