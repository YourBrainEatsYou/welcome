import { AbstractWelcomeApiService } from "@/api/abstract-welcome-api.service";
import { WelcomePayload } from "@/interfaces/payload/welcome-payload";
import { Component } from '@angular/core';
import { first, catchError, of, EMPTY, tap, finalize } from "rxjs";

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent {

  isPosting: boolean = false;
  isLoading: boolean = false;

  // data
  ticketCode: string = '';
  identification: boolean = false;
  badgeSerialNumber: string = '';
  merch: boolean = false;

  welcomeData: WelcomePayload | null = null;

  private steps = [
    'welcome',
    'ticket',
    'identification',
    'badge',
    'merch',
    'finish'
  ];
  currentStep = this.steps[0];

  constructor(
    private welcomeApiService: AbstractWelcomeApiService
  ) {
  }


  next() {
    const currentStepIndex = this.steps.indexOf(this.currentStep);
    this.currentStep = this.steps[currentStepIndex + 1];
  }

  reset() {
    this.ticketCode = '';
    this.identification = false;
    this.badgeSerialNumber = '';
    this.currentStep = this.steps[0];
    this.welcomeData = null;
  }

  onWelcomeEmit() {
    this.next();
  }

  onCodeEmit(code: string) {
    this.ticketCode = code;

    this.isLoading = true;

    this.welcomeApiService.getWelcome(this.ticketCode).pipe(
      first(),
      finalize(() => this.isLoading = false),
      tap((payload) => {
        this.welcomeData = payload.data;
        this.next();
      }),
      catchError((error) => {
        alert(error);
        return of(EMPTY);
      })
    ).subscribe();

  }

  onIdentificationEmit() {
    this.identification = true;
    this.next();
  }

  onBadgeSerialNumberEmit(badgeSerialNumber: string) {
    this.badgeSerialNumber = badgeSerialNumber;
    this.next();
  }

  onMerchEmit() {
    this.merch = true;
    this.next();
  }

  onFinishEmit() {
    this.isPosting = true;
    // do the API stuff
    this.welcomeApiService.postWelcome({
      ticketCode: this.ticketCode,
      identification: this.identification,
      badgeSerialNumber: this.badgeSerialNumber,
      merch: this.merch
    }).pipe(
      first(),
      finalize(() => this.isPosting = false),
      tap(() => this.reset()),
      catchError((error) => {
        alert(error);
        return of(EMPTY);
      })
    ).subscribe();


  }


}
