import { Component } from '@angular/core';

@Component({
  selector: 'app-day1',
  templateUrl: './day1.component.html',
  styleUrls: ['./day1.component.css']
})
export class Day1Component {
  data=''
  flip(){
    if(this.data=='')
    {
      this.data='hidden'
    }
    else{
      this.data=''
    }
  }
}
