import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-app';
  person={
    firstname:"jyoti",
    lastname:"nalawade"
  };
  yell(e: any){
    alert("participant left");
  }
}
