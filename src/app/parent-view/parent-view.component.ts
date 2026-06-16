import {AfterContentInit, AfterViewInit, Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {ChildViewComponent} from "../child-view/child-view.component";

@Component({
  selector: 'app-parent-view',
  templateUrl: './parent-view.component.html',
  styleUrls: ['./parent-view.component.scss']
})
export class ParentViewComponent implements
  OnInit,
  AfterContentInit,
  AfterViewInit
{

  @ViewChild(ChildViewComponent ) viewChild: ChildViewComponent ;
  //@ViewChild('firstParagraphe') paragraphe: ElementRef  ;

  constructor( ) {
    this.viewChild = new ChildViewComponent();
  }


  ngOnInit(): void {
    //this.paragraphe.nativeElement.innerText = 'hello'
    this.viewChild.fromTheChild() ;
    console.log(this.viewChild.publicNameOfChild);
  }


  ngAfterContentInit(): void {
    this.viewChild.fromTheChild() ;
    console.log(this.viewChild.publicNameOfChild);
  }

  ngAfterViewInit() {
    this.viewChild.fromTheChild() ;
    console.log(this.viewChild.publicNameOfChild);
  }


}
