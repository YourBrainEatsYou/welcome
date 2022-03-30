import { Component, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-finish',
  templateUrl: './finish.component.html',
  styleUrls: ['./finish.component.scss']
})
export class FinishComponent {

  @Input() loading: boolean = false;
  @Output() finish: EventEmitter<boolean> = new EventEmitter<boolean>();

  onClick() {
    this.finish.emit(true);
  }
}
