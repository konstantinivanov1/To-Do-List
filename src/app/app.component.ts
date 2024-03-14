import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'to-do-list';
  switchListValue: boolean = true;
  switchFormValue: boolean = false;

  switchView(key: string){
    if(key === "List"){
      this.switchListValue = true;
      this.switchFormValue = false;
    } 
    if(key === "Form"){
      this.switchListValue = false;
      this.switchFormValue = true;
    }
  }
}
