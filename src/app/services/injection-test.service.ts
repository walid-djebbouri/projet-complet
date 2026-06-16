import { Injectable } from '@angular/core';

@Injectable()
export class InjectionTestService {

  name: string = 'walid djebbouri'
  constructor() { }

  myFirstFunction(): string {
    return `${this.name}`;
  }
}
