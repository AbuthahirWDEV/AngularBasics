import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-greeting',
  templateUrl: './greeting.component.html',
  styleUrls: ['./greeting.component.css']
})
export class GreetingComponent {
  //  input we can recieve something from outside of this component
  // message = Input('Default greeting ')
  @Input() message ='Default greeting'
}
