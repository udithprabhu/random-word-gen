import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RandomWordService {

  constructor() { }

  getWord(): string {
    return Math.random().toString(); 
  }
}
