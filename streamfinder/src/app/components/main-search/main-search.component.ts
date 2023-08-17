import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {MatInput} from "@angular/material/input";

@Component({
  selector: 'app-main-search',
  templateUrl: './main-search.component.html',
  styleUrls: ['./main-search.component.scss']
})
export class MainSearchComponent implements OnInit {
  @ViewChild('searchbar') searchbar: ElementRef | undefined;
  results: any = [];
  constructor() { }

  ngOnInit(): void {
  }

  search(){
    console.log('search', this.searchbar?.nativeElement.value)
  }

  clear(){
    this.searchbar!.nativeElement.value = ''
  }

}
