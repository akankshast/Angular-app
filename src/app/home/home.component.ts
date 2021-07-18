import { Component,  Input,  OnInit, Output,EventEmitter } from '@angular/core';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  hometitle= "Weelcome to home page...";
  myString="I like biryani";
  myBool=true;
  me={
    firstName:"akanksha",
  lastName:"tamboli",
  
  };
  
  
  user=  "female";

  alertme(val: any)
  {
    alert(val);
  }
  @Input() person: any;
  @Output() onYell =new EventEmitter();

  fireYellEvent(e: any){
    this.onYell.emit(e);
  }

  constructor() { }

  ngOnInit(): void {
  }

}
