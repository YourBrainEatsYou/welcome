import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-badge',
  templateUrl: './badge.component.html',
  styleUrls: ['./badge.component.scss']
})
export class BadgeComponent implements OnInit {

  @Output() badgeSerialNumber: EventEmitter<string> = new EventEmitter<string>();

  constructor() {
  }

  ngOnInit(): void {
    if ("NDEFReader" in window) {
      const ndef = new NDEFReader();

      ndef.scan().then(() => {
        
        ndef.onreading = (event: NDEFReadingEvent) => {
          alert(event.serialNumber);
          this.badgeSerialNumber.emit(event.serialNumber);
        };
      }).catch(() => {
      });
    } else {
      console.log('NDEF not suported');
    }
  }

}
