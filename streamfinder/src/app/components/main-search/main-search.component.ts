import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {SearchService} from "../../services/search.service";

@Component({
  selector: 'app-main-search',
  templateUrl: './main-search.component.html',
  styleUrls: ['./main-search.component.scss']
})
export class MainSearchComponent implements OnInit {
  @ViewChild('searchbar') searchbar: ElementRef | undefined;
  results: any = [];
  loading: boolean = false;
  searched: boolean = false;
  constructor(private searchService: SearchService) { }

  ngOnInit(): void {
  }

  search(){
    this.loading = true;
    this.searched = true;
    this.searchService.findOne(this.searchbar!.nativeElement.value).subscribe(response => {
      this.results = response.results;
      this.loading = false;
    })
    
  }

  clear(){
    this.searchbar!.nativeElement.value = ''
    this.results = [];
    this.searched = false;
  }

}
