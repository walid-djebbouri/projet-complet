import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {DockerComponentComponent} from "./docker-component/docker-component.component";
import {LifeCycleHooksComponent} from "./life-cycle-hooks/life-cycle-hooks.component";
import {DepandenceInjectionComponent} from "./depandence-injection/depandence-injection.component";
import {ParentViewComponent} from "./parent-view/parent-view.component";
import {KafkaApacheComponent} from "./kafka-apache/kafka-apache.component";
import {SignauxComponent} from "./signaux/signaux.component";
import {GeneralReviewComponent} from "./general-review/general-review.component";
import {GithubActionsComponent} from "./github-actions/github-actions.component";
import {RxjsComponentComponent} from "./rxjs-component/rxjs-component.component";
import {RxjsOperatorsComponent} from "./rxjs-operators/rxjs-operators.component";
import {JavaScriptComponent} from "./java-script/java-script.component";

const routes: Routes = [
  { path: 'users-page' , component: DockerComponentComponent },
  { path: 'injection-dependency', component: DepandenceInjectionComponent},
  { path: 'lifeCycle-Hook' , component: LifeCycleHooksComponent},
  { path: 'parent-view' ,  component: ParentViewComponent},
  { path: 'kafka-apache' , component: KafkaApacheComponent},
  { path: 'signaux', component: SignauxComponent},
  { path: 'general-review', component: GeneralReviewComponent},
  { path: 'github-actions', component: GithubActionsComponent},
  { path: 'rxjs-review', component: RxjsComponentComponent},
  { path: 'rxjs-operators', component: RxjsOperatorsComponent},
  { path: 'java-script', component: JavaScriptComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
