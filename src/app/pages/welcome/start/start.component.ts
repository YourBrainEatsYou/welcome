import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.scss']
})
export class StartComponent {

  @Output() started: EventEmitter<boolean> = new EventEmitter<boolean>();

  onClick() {
    this.started.emit(true);
  }

}
