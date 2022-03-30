import { AbstractWelcomeApiService } from "@/api/abstract-welcome-api.service";
import { WelcomeDto } from "@/interfaces/dto/welcome-dto";
import { Payload } from "@/interfaces/payload";
import { WelcomePayload } from "@/interfaces/payload/welcome-payload";
import { HttpClient } from "@angular/common/http";
import { Injectable } from '@angular/core';
import { Observable, first } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class WelcomeApiService implements AbstractWelcomeApiService {

  constructor(
    private http: HttpClient
  ) {
  }

  getWelcome(ticketCode: string): Observable<Payload<WelcomePayload>> {
    return this.http.get<Payload<any>>('/welcome', {params: {ticketCode}}).pipe(first());
  }

  postWelcome(postWelcomeDto: WelcomeDto): Observable<Payload<null>> {
    return this.http.post<Payload<null>>('/welcome', {...postWelcomeDto}).pipe(first());
  }
}
