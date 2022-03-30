import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-badge',
  templateUrl: './badge.component.html',
  styleUrls: ['./badge.component.scss']
})
export class BadgeComponent implements OnInit {

  @Output() badgeSerialNumber: EventEmitter<string> = new EventEmitter<string>();

  ngOnInit(): void {
    const scan = async () => {
      if ("NDEFReader" in window) {
        try {
          const ndef = new NDEFReader();
          await ndef.scan();

          ndef.addEventListener("readingerror", () => {
            alert("Argh! Cannot read data from the NFC tag. Try another one?");
          });

          // @ts-ignore
          ndef.addEventListener("reading", ({serialNumber}) => {
            this.badgeSerialNumber.emit(serialNumber);
          });
        } catch (error) {
          console.log("Argh! " + error);
        }
      } else {
        console.log('NDEF not suported');
      }
    };
    scan();
  }

  serialNumber() {
    this.badgeSerialNumber.emit('44:65:96:EE');
  }
}
