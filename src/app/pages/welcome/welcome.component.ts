import { Component } from '@angular/core';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent {

  // data
  ticketCode: string = '';
  identification: boolean = false;
  badgeSerialNumber: string = '';

  private steps = [
    'welcome',
    'ticket',
    'identification',
    'badge',
    'finish'
  ];
  currentStep = this.steps[0];


  next() {
    const currentStepIndex = this.steps.indexOf(this.currentStep);
    this.currentStep = this.steps[currentStepIndex + 1];
  }

  reset() {
    this.ticketCode = '';
    this.identification = false;
    this.badgeSerialNumber = '';
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

  onBadgeSerialNumberEmit(badgeSerialNumber: string) {
    this.badgeSerialNumber = badgeSerialNumber;
    this.next();
  }

  onFinishEmit() {
    // do the API stuff
    this.reset();
  }


}
