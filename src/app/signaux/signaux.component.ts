import {Component, DoCheck} from '@angular/core';

@Component({
  selector: 'app-signaux',
  templateUrl: './signaux.component.html',
  styleUrls: ['./signaux.component.scss']
})
export class SignauxComponent implements DoCheck{
  ngDoCheck(): void {
    console.log('SignauxComponent ')

  }

}
