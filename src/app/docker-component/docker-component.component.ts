import { Component } from '@angular/core';
import {DockerService} from "../services/docker.service";

@Component({
  selector: 'app-docker-component',
  templateUrl: './docker-component.component.html',
  styleUrls: ['./docker-component.component.scss']
})
export class DockerComponentComponent {

  constructor(private dockerService: DockerService) {
  }

  public getAllUsers(): void {
    this.dockerService.getUsers().subscribe(
      (users) => console.log(users) ,
      () => {} ) ;
  }

  public postNewUser(): void {
    this.dockerService.postUser().subscribe(
      (newUser) =>  console.log(newUser) ,
      (errors) => console.log(errors) )
  }

}
