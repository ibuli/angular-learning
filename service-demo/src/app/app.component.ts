import { Component } from '@angular/core';
import {InteractionService} from './interaction.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'service-demo';

  constructor(private _interactionService: InteractionService) {}

  greetStudent() {
    this._interactionService.sendMessage('Good morning');
  }

  appreciateStudent() {
    this._interactionService.sendMessage('Well done');
  }
}
