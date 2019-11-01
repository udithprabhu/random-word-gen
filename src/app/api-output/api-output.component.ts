import { Component, OnInit, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-api-output',
  templateUrl: './api-output.component.html',
  styleUrls: ['./api-output.component.css']
})
export class ApiOutputComponent implements OnInit {

  constructor(@Inject(DOCUMENT) private document: Document) { }

  ngOnInit() {
    console.log(this.document.documentElement.innerHTML);
    this.document.documentElement.innerHTML = "Something Works";
  }

}
