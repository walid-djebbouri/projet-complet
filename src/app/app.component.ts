import { Component } from '@angular/core';
import {InjectionTestService} from "./services/injection-test.service";
import {environment} from "../environments/environment";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'houssem djebbouri';
  env = environment.production ;
  envName = environment.envName ;
  constructor(private service: InjectionTestService) {

    setTimeout(() => {
      this.title = this.service.myFirstFunction();
    }, 5000);

  }
  helloClic():void {}
}
