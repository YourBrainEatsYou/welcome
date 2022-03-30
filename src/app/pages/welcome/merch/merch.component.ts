import { WelcomePayload } from "@/interfaces/payload/welcome-payload";
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-merch',
  templateUrl: './merch.component.html',
  styleUrls: ['./merch.component.scss']
})
export class MerchComponent implements OnInit {

  @Input() welcomeData: WelcomePayload | null = null;
  @Output() merch: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor() {
  }

  ngOnInit() {
    if (this.welcomeData?.merch.length === 0) {
      this.onCheckedMerch();
    }
  }

  onCheckedMerch() {
    this.merch.emit(true);
  }

}
