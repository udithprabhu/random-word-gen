import { Component, OnInit } from '@angular/core';
import { RandomWordService } from '../random-word.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(
    private randomWordService: RandomWordService,
    private toastr: ToastrService
  ) { }
  randomword:string;
  ngOnInit() {
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
