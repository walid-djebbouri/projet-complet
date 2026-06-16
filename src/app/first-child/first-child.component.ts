import {
  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  ContentChild,
  DoCheck,
  ElementRef,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
  ViewChild
} from '@angular/core';

@Component({
  selector: 'app-first-child',
  templateUrl: './first-child.component.html',
  styleUrls: ['./first-child.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FirstChildComponent implements OnInit,
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked,
  OnChanges, DoCheck {

  @ContentChild('content', {static: true}) testContent!: ElementRef
  @ViewChild('viewChild') testChild: FirstChildComponent | undefined

  @Input() prenom: string = 'walid';

  constructor() {
    //console.log(this.prenom, 'C constructor')
    //setTimeout(() =>  this.prenom = 'houssem' , 5000)
  }

  ngDoCheck(): void {
    console.log('FirstChildComponent ')
    }

  ngOnChanges(changes: SimpleChanges): void {
  console.log('FirstChildComponent ')
  }

  ngOnInit() {
    //console.log(this.prenom, 'C ngOnInit')
  }

  ngAfterContentChecked(): void {
   //console.log( 'C ngAfterContentChecked', this.testContent)
    console.log('FirstChildComponent ')
  }

  ngAfterContentInit(): void {
   console.log( 'C ngAfterContentInit', this.testContent)

    setTimeout( () => {
      this.testContent.nativeElement.style.color = 'red'
    } , 5000)

  }

  ngAfterViewChecked(): void {
    console.log( 'C ngAfterViewChecked' , this.testContent, this.testChild)

  }

  ngAfterViewInit(): void {
    console.log( 'C ngAfterViewInit' , this.testContent, this.testChild )

  }

}
