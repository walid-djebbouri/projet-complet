import {ChangeDetectionStrategy, Component, DoCheck, OnInit} from '@angular/core';
import {BehaviorSubject, Observable, Subject} from "rxjs";

@Component({
  selector: 'app-rxjs-component',
  templateUrl: './rxjs-component.component.html',
  styleUrls: ['./rxjs-component.component.scss'],
})
export class RxjsComponentComponent implements OnInit,DoCheck{
  ngDoCheck(): void {
      //console.log("RxjsComponentComponent")
  }

  behaviorSubject = new BehaviorSubject<string>('Houssem Djebbouri');
  subject = new Subject();
  observable = new Observable() ;

  ngOnInit(): void {

    this.behaviorSubject.subscribe( ( (value: string) => console.log(value, 1) ) )
    this.subject.subscribe( ( value => console.log(value , 13) ) );

    this.behaviorSubject.next('walid djebbouri BehaviorSubject');
    this.subject.next('walid djebbouri Subject');

    this.behaviorSubject.subscribe( ( (value: string) => console.log(value, 2) ) )
    this.subject.subscribe( ( value => console.log(value , 2) ) );

    this.subject.next('Houssem djebbouri Subject');


  }



}
