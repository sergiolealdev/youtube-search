import { Component, OnInit } from '@angular/core';
import {SearchResultComponent} from '../search-result/search-result.component';

@Component({
  selector: 'app-youtube-search',
  templateUrl: './youtube-search.component.html',
  styleUrls: ['./youtube-search.component.css']
})
export class YoutubeSearchComponent implements OnInit {

  results: SearchResultComponent[];;

  constructor() { }

  ngOnInit() {
  }



  updateResults(results: SearchResultComponent[]): void {
    this.results = results;
    console.log("results:", this.results); // uncomment to take a look
  }

}
