import { Component, OnInit } from '@angular/core';
import {InteractionService} from '../interaction.service'

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent implements OnInit {
  
  constructor(private _interactionService: InteractionService) {}

  ngOnInit(): void {
    this._interactionService.teacherMessage$.subscribe(message => {
      if(message === "Good morning")
        alert('Good morning teacher');
      else
        alert('Thank you teacher');
    })
  }

}
