import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  screenHeight: string = `${window.screen.availHeight *0.8}px`;
  title = 'Your Online Portfolio';
}
