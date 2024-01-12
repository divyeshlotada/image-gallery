import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

  searchText:any = "";
  // a1:any = ""

@Output()
searchevent:EventEmitter<any> = new EventEmitter<any>();

send_to_parent(data:any){
  this.searchText = data.value;
  // console.log(data.value);
  this.searchevent.emit(this.searchText);
  // console.log(this.searchText)
}
}
