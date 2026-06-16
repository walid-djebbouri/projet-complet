import {LOCALE_ID, NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FirstComponentComponent } from './first-component/first-component.component';
import {InjectionTestService} from "./services/injection-test.service";
import {UseClass} from "./services/useClasse";
import {DockerService} from "./services/docker.service";
import { DockerComponentComponent } from './docker-component/docker-component.component';
import {HttpClientModule} from "@angular/common/http";
import { LifeCycleHooksComponent } from './life-cycle-hooks/life-cycle-hooks.component';
import { DepandenceInjectionComponent } from './depandence-injection/depandence-injection.component';
import { FirstChildComponent } from './first-child/first-child.component';
import { ParentViewComponent } from './parent-view/parent-view.component';
import { ChildViewComponent } from './child-view/child-view.component';
import { KafkaApacheComponent } from './kafka-apache/kafka-apache.component';
import { SignauxComponent } from './signaux/signaux.component';
import { GeneralReviewComponent } from './general-review/general-review.component';
import { GithubActionsComponent } from './github-actions/github-actions.component';
import { RxjsComponentComponent } from './rxjs-component/rxjs-component.component';
import { RxjsOperatorsComponent } from './rxjs-operators/rxjs-operators.component';
import { JavaScriptComponent } from './java-script/java-script.component';
import localeFr from '@angular/common/locales/fr';
import {registerLocaleData} from "@angular/common";

registerLocaleData(localeFr);



export function useFactories ()  {}

 // export const type: boolean = true ;

@NgModule({
  declarations: [
    AppComponent,
    FirstComponentComponent,
    DockerComponentComponent,
    LifeCycleHooksComponent,
    DepandenceInjectionComponent,
    FirstChildComponent,
    ParentViewComponent,
    ChildViewComponent,
    KafkaApacheComponent,
    SignauxComponent,
    GeneralReviewComponent,
    GithubActionsComponent,
    RxjsComponentComponent,
    RxjsOperatorsComponent,
    JavaScriptComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    DockerService,
    { provide: 'type', useValue: false },
    { provide: LOCALE_ID, useValue: 'en-US'},
    {
    provide: InjectionTestService,
    useFactory: ( types: boolean) => {
      return types ? new InjectionTestService() : new UseClass();
    } ,
    deps: ['type']
  }],
  bootstrap: [AppComponent]
})
export class AppModule {}
