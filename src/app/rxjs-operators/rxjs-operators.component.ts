import {Component, OnInit} from '@angular/core';
import {
  combineLatest,
  forkJoin,
  map,
  mergeMap,
  Observable,
  of,
  switchMap,
  take,
  tap,
  timer,
  withLatestFrom
} from "rxjs";

@Component({
  selector: 'app-rxjs-operators',
  templateUrl: './rxjs-operators.component.html',
  styleUrls: ['./rxjs-operators.component.scss']
})
export class RxjsOperatorsComponent implements OnInit{

  ngOnInit() {
    const obs1 = timer(0, 2000)
    const obs2 = timer(0, 1);

   /*obs1.subscribe(  (v1) => {
      console.log(v1)
      obs2.subscribe((v2) => console.log(v2))
    }) ;*/

  /*  obs1.pipe(
      switchMap(  (nb)  =>  of(nb * 2)  ),
      map(  (nb) => nb * 2 ),
      tap(  (nb) => nb * 2  )
      ).subscribe(  (nb) => console.log( "walid djebbouri", nb) )  ;



   obs1
     .pipe( withLatestFrom(obs2) )
     .subscribe(([v1, v2]) => console.log( 'WithLatestFrom', v1 , v2));

   forkJoin(
     obs1,
     obs2
   ).subscribe( ([v1, v2]) => console.log( 'forKJoin', v1 , v2) )

    combineLatest(
      obs1,
      obs2).subscribe( ([v1 , v2]) => console.log('combineLatest', v1 , v2) )


    obs1
      .pipe(
        switchMap(
          (v1) => obs2.pipe(map( (v2) => `${v1.toString()}  ${v2}`   ))
        )).subscribe( v => console.log('switchMap', v) ) ;

   obs1
     .pipe(
       mergeMap(
         (v1) =>  obs2.pipe( map( (v2) => `${v1.toString()}  ${v2}` ) )
       )).subscribe(  v => console.log(`mergeMap ${v}`))*/




 //   combineLatest([obs1, obs2]).pipe(take(5)).subscribe( ([e1,e2]) => console.log(`Hello From combineLatest  ${e1}   ${e2}`  ))
 //   forkJoin([obs1, obs2]).pipe(take(5)).subscribe(([e1,e2]) => console.log(`Hello From ForkJoin  ${e1}   ${e2}`) )
 //   obs1.pipe(withLatestFrom(obs2)).pipe(take(5)).subscribe(([e1, e2]) => console.log(`Hello From withLatestFrom  ${e1}   ${e2}`)  )

    obs1.pipe(
      switchMap(
        e1 => obs2.pipe(
          map( e2 => e1 + e2 )
        )
      )  ,
      take(5)
    ).subscribe(e => console.log(e));











  }



}
