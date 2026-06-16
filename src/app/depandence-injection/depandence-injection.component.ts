import { Component } from '@angular/core';
import {environment} from "../../environments/environment";
import {InjectionTestService} from "../services/injection-test.service";

@Component({
  selector: 'app-depandence-injection',
  templateUrl: './depandence-injection.component.html',
  styleUrls: ['./depandence-injection.component.scss']
})
export class DepandenceInjectionComponent {
  title = 'houssem djebbouri';
  env = environment.production ;
  envName = environment.envName ;
  constructor(private service: InjectionTestService) {

    setTimeout(() => {
      this.title = this.service.myFirstFunction();
    }, 5000);

  }

  helloClic() {}
}
