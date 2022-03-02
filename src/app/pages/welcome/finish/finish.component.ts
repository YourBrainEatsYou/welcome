import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-finish',
  templateUrl: './finish.component.html',
  styleUrls: ['./finish.component.scss']
})
export class FinishComponent {

  @Output() finish: EventEmitter<boolean> = new EventEmitter<boolean>();

  onClick() {
    this.finish.emit(true);
  }
}
