import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-badge',
  templateUrl: './badge.component.html',
  styleUrls: ['./badge.component.scss']
})
export class BadgeComponent implements OnInit {

  constructor() {
  }

  ngOnInit(): void {
    if ("NDEFReader" in window) {
      const ndef = new NDEFReader();

      ndef.scan().then(() => {
        ndef.onreadingerror = () => {
          console.log('error');
        };

        ndef.onreading = (event: NDEFReadingEvent) => {
          console.log(event);
          console.log('readed');
        };
      }).catch((error) => {
        console.log(error);
      });
    } else {
      console.log('NDEF not suported');
    }
  }

}
