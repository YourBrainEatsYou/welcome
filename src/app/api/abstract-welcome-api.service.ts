import { WelcomeDto } from "@/interfaces/dto/welcome-dto";
import { Payload } from "@/interfaces/payload";
import { Injectable } from '@angular/core';
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export abstract class AbstractWelcomeApiService {
  public abstract getWelcome(badgeSerialNumber: string): Observable<Payload<any>>;

  public abstract postWelcome(postWelcomeDto: WelcomeDto): Observable<Payload<null>>;
}
