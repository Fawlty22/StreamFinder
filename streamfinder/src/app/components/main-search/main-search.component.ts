import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {SearchService} from "../../services/search.service";
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-main-search',
  templateUrl: './main-search.component.html',
  styleUrls: ['./main-search.component.scss']
})
export class MainSearchComponent implements OnInit {
  results: any = [];
  loading: boolean = false;
  searched: boolean = false;
  form: FormGroup;
  constructor(private searchService: SearchService, private fb: FormBuilder) { 
    this.form = fb.group({
      search: [''],
      type: ['']
    })
  }

  ngOnInit(): void {
  }

  search(){
    this.loading = true;
    this.searched = true;
    this.searchService.search(this.form.get('search')?.value, this.form.get('type')?.value).subscribe(response => {
      
      this.results = response.results;
      this.results.forEach((each: any) => {
        this.searchService.findProvider(each.id).subscribe((provResponse: any) => {
          each.providers = provResponse.results?.US?.flatrate;
        })
      })
      this.loading = false;
    })
    
  }

  clear(){
   this.form.get('search')?.setValue('');
    this.results = [];
    this.searched = false;
  }

}
