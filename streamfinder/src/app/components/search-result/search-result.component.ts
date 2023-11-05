import { Component, OnChanges, Input, SimpleChanges } from '@angular/core';
import { Provider } from 'src/app/core/models/provider.interface';
import { SearchResult } from 'src/app/core/models/search-result.interface';

@Component({
  selector: 'app-search-result',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.scss']
})
export class SearchResultComponent {
  @Input() result: SearchResult = {} as SearchResult;
  baseImageUrl = 'https://image.tmdb.org/t/p/w500';
  constructor() { }
  
}
