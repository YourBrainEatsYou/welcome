import { Component, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-identification',
  templateUrl: './identification.component.html',
  styleUrls: ['./identification.component.scss']
})
export class IdentificationComponent {

  @Input() ticketCode: string = '';
  @Output() identification: EventEmitter<boolean> = new EventEmitter<boolean>();

  onCheckedIdentification() {
    this.identification.emit(true);
  }
}
