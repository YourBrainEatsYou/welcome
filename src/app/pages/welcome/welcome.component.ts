import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent implements OnInit {

  // data
  ticketCode: string = '';
  identification: boolean = false;
  badgeNumber: string = '';

  private steps = [
    'welcome',
    'ticket',
    'identification',
    'badge'
  ];
  currentStep = this.steps[0];

  ngOnInit(): void {
  }

  next() {
    const currentStepIndex = this.steps.indexOf(this.currentStep);
    this.currentStep = this.steps[currentStepIndex + 1];
  }

  reset() {
    this.currentStep = this.steps[0];
  }

  onWelcomeEmit() {
    this.next();
  }

  onCodeEmit(code: string) {
    this.ticketCode = code;
    this.next();
  }

  onIdentificationEmit() {
    this.identification = true;
    this.next();
  }


}
