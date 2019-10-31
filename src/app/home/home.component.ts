import { Component, OnInit } from '@angular/core';
import { RandomWordService } from '../random-word.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private randomWordService: RandomWordService) { }
  randomword:string = "randomwordz";
  ngOnInit() {
    this.refreshWord();
  }

  refreshWord(){
    this.randomword = this.randomWordService.getWord();
  }

}
