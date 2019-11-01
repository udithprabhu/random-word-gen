import { Component, OnInit, Inject } from '@angular/core';
import { RandomWordService } from '../random-word.service';
import { ToastrService } from 'ngx-toastr';
import { ActivatedRoute } from '@angular/router';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(
    private randomWordService: RandomWordService,
    private toastr: ToastrService,
    private route: ActivatedRoute,
    @Inject(DOCUMENT) private document: Document
  ) { }
  randomword:string;
  ngOnInit() {
    console.log(JSON.stringify(this.route.snapshot.queryParamMap))
    if(this.route.snapshot.queryParamMap.get("api")){
      this.document.documentElement.innerHTML = "something"
    }
    this.refreshWord();
  }

  refreshWord(){
    this.randomword = this.randomWordService.getWord();
  }
  
  copyWord(){
    this.copyToClipboard(this.randomword);
  }

  copyToClipboard(item: string) {
    document.addEventListener('copy', (e: ClipboardEvent) => {
      e.clipboardData.setData('text/plain', (item));
      e.preventDefault();
      document.removeEventListener('copy', null);
    });
    document.execCommand('copy');
    this.toastr.success('Successfully copied to clipboard');
  }

}
