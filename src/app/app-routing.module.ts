import { AppComponent } from "@/app.component";
import { IsAuthenticatedGuard } from "@/guards/is-authenticated.guard";
import { KeyExchangeGuard } from "@/guards/key-exchange.guard";
import { RedirectComponent } from "@/pages/redirect/redirect.component";
import { NgModule, InjectionToken } from '@angular/core';
import { RouterModule, Routes, ActivatedRouteSnapshot } from '@angular/router';

const externalUrlProvider = new InjectionToken('externalUrlRedirectResolver');

const routes: Routes = [
  {
    path: 'welcome',
    component: AppComponent,
    canLoad: [IsAuthenticatedGuard],
    canActivate: [IsAuthenticatedGuard],
    canActivateChild: [IsAuthenticatedGuard],
    runGuardsAndResolvers: 'always'
  },
  {
    path: 'auth/:token',
    canActivate: [KeyExchangeGuard],
    children: []
  },
  {
    path: 'redirect',
    component: RedirectComponent,
    canActivate: [externalUrlProvider]
  },
  {
    path: '**',
    redirectTo: 'welcome'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [
    {
      provide: externalUrlProvider,
      useValue: (route: ActivatedRouteSnapshot) => {
        const externalUrl = route.paramMap.get('externalUrl');
        if (externalUrl) {
          window.open(externalUrl, '_self');
        }
      }
    }
  ]
})
export class AppRoutingModule {
}
