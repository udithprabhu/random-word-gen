import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-word-output',
  templateUrl: './word-output.component.html',
  styleUrls: ['./word-output.component.css']
})
export class WordOutputComponent implements OnInit {

  @Input() randomword: string;
  constructor() { }

  ngOnInit() {
  }

}
