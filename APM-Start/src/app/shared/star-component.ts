import { Component, OnChanges, SimpleChanges, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'star',
  templateUrl: './star.component.html',
  styleUrls: ['./star.component.css']
})
export class StarComponent implements OnChanges {

  @Input()rating:number;
  starWidth:number;
  @Output() notif: EventEmitter<string>;

  constructor(){
    this.notif= new EventEmitter<string>();
  }
  ngOnChanges(changes: SimpleChanges): void {
    this.starWidth= this.rating * 75/5;
  }

  onClick(){
    this.notif.emit(`yes ${this.rating}`);
  }

}
