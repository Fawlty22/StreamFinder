import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SearchService } from 'src/app/services/search.service';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.scss']
})
export class OverviewComponent implements OnInit {
  id: number = 0;
  constructor(private route: ActivatedRoute, private searchService: SearchService) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
        this.id = params['id'];
        this.searchService.findOneMovie(this.id).subscribe(movie => {
          console.log(movie)
        })
    })
  }

}
