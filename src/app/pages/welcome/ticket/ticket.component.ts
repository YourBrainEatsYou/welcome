import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { BarcodeFormat } from "@zxing/library";

@Component({
  selector: 'app-ticket',
  templateUrl: './ticket.component.html',
  styleUrls: ['./ticket.component.scss']
})
export class TicketComponent implements OnInit {

  formats: BarcodeFormat[] = [BarcodeFormat.QR_CODE];

  @Output() code: EventEmitter<string> = new EventEmitter<string>();

  constructor() {
  }

  ngOnInit(): void {
  }

  onCodeResult(resultString: string) {
    this.code.emit(resultString);
  }
}
