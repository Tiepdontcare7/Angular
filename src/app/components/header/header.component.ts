import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  title: string = 'hello world';
  // changeInput(event: Event) {
  //   this.title = (event.target as HTMLInputElement).value
  // }
}
