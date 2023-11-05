import { Component, OnChanges, Input, SimpleChanges } from '@angular/core';
import { SearchService } from 'src/app/services/search.service';

@Component({
  selector: 'app-search-result',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.scss']
})
export class SearchResultComponent implements OnChanges {
  @Input() results: any[] = [];
  baseImageUrl = 'https://image.tmdb.org/t/p/w500';
  constructor(private searchService: SearchService) { }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['results']){
      this.results.forEach((each: any) => {
        this.searchService.findProvider(each.id).subscribe((provResponse: any) => {
          each.providers = provResponse.results?.US?.flatrate;
        })
      })
    }
  }

}
