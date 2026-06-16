import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {map, Observable} from "rxjs";

@Injectable()

export class DockerService {
  readonly baseUrl: string = 'http://localhost:3000/';
  constructor(private http: HttpClient) {}

  public getUsers(): Observable<any> {
    return  this.http.get(this.baseUrl+ 'getUsers').pipe( map (user  => user )  ) ;
  }

  public postUser(): Observable<any> {
    return this.http.post(this.baseUrl+ 'postUser' , {
      name: 'djebbouri',
      prenom: 'walid',
      age: 30
    }).pipe( map( newUser => newUser ) );
  }
}
