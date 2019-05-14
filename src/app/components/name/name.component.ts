import { Component, OnInit, } from '@angular/core';

@Component({
  selector: 'app-name',
  templateUrl: './name.component.html',
  styleUrls: ['./name.component.css']
})
export class NameComponent implements OnInit {
  inputValue:string;

  onKey(event) {
    this.inputValue = event.target.value;
    console.log(this.inputValue);
    return this.inputValue;
  }
  

  ngOnInit() {
    
  }

}
