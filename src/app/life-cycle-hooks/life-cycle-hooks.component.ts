import {
  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ContentChild,
  DoCheck,
  ElementRef,
  OnChanges,
  OnInit,
  SimpleChanges,
  ViewChild
} from '@angular/core';
import {FirstChildComponent} from "../first-child/first-child.component";

@Component({
  selector: 'app-life-cycle-hooks',
  templateUrl: './life-cycle-hooks.component.html',
  styleUrls: ['./life-cycle-hooks.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LifeCycleHooksComponent implements
  OnChanges,
  OnInit,
  DoCheck,
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked

{
    public name: string = 'walid'
    public  prenom: string = 'Yassine'
  @ContentChild('content') testContent: ElementRef| undefined
  @ViewChild('viewChild', {static: false}) testChild: FirstChildComponent | undefined

  constructor(private cdr: ChangeDetectorRef) {
      //console.log('P constructor')
    // setTimeout(() => { this.name  = 'houssem' } , 7500)
     // setTimeout(() =>  this.prenom = 'Zakaria', 7500)
    }

  ngOnChanges(changes: SimpleChanges): void {
      console.log('LifeCycleHooksComponent')
  }

  ngOnInit(): void {
    //console.log('P ngOnInit')
    console.log('P ngOnInt', this.testChild)
    setTimeout(
      () => {
        this.prenom = 'Zinou';
        this.cdr.markForCheck();
    }  , 6000) ;


  }

  ngDoCheck(): void {
    console.log('LifeCycleHooksComponent')
    }

    onClick(): void{}

  ngAfterContentChecked(): void {
    //console.log('P ngAfterContentChecked', this.testContent )
    console.log('LifeCycleHooksComponent ')

  }

  ngAfterContentInit(): void {
    console.log('P ngAfterContentInit', this.testContent )
    }

  ngAfterViewChecked(): void {
    console.log('P ngAfterViewChecked',  this.testChild )

  }

  ngAfterViewInit(): void {
    console.log('P ngAfterViewInit', this.testChild )

  }


}
