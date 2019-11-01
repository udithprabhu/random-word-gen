import { Injectable } from '@angular/core';
import  probabilityJson  from './prob.json';

@Injectable({
  providedIn: 'root'
})
export class RandomWordService {



  constructor() {
  }

  weightedChoice(array: string[], weights: number[]): string {
    let s = weights.reduce((a, e) => a + e);
    let r = Math.random() * s;
    return array.find((e, i) => (r -= weights[i]) < 0);
  }

  getWord(minLength: number = 4, maxLength: number = 10): string {
    
    let keys = Object.keys(probabilityJson)
    let initial = keys[Math.floor(Math.random() * keys.length)];
    var result = initial;
    while(result.slice(-1) != "."){
      if(result.length == maxLength){
        result += "."
        break
      }
      let probObj = probabilityJson[result.slice(-2)];
      let keysList = Object.keys(probObj);
      let valuesList: number[] = Object.values(probObj);
      console.log(valuesList);
      var choice = this.weightedChoice(keysList, valuesList);
      while(choice == "." && result.length < minLength)
        choice = this.weightedChoice(keysList, valuesList);

      result += choice
    }
    return result.slice(0, -1)
  }
}
