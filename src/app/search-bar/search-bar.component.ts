import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent implements OnInit {
  value: string = "";
  
  displayFrame = false;
  onKey(event: any){
    this.value = event.target.value;
  }
  onClick(){
    this.safeUrl = this._sanitizer.bypassSecurityTrustResourceUrl(this.value)
  }
  safeUrl : any;

  constructor(private _sanitizer: DomSanitizer) { }

  ngOnInit(){
   
  }

}
