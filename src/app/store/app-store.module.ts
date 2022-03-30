import { AbstractWelcomeApiService } from "@/api/abstract-welcome-api.service";
import { WelcomeApiService } from "@/api/welcome-api.service";
import { AuthStoreModule } from '@/store/auth/auth-store.module';
import { metaReducers } from "@/store/meta-reducers";
import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../../environments/environment';

@NgModule({
  declarations: [],
  imports: [
    StoreModule.forRoot({}, {metaReducers}),
    EffectsModule.forRoot([]),
    !environment.production ? StoreDevtoolsModule.instrument({maxAge: 25}) : [],
    AuthStoreModule
  ],
  providers: [
    {provide: AbstractWelcomeApiService, useClass: WelcomeApiService}
  ]
})
export class AppStoreModule {
}
