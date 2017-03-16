import { Component, OnInit } from '@angular/core';
import {SearchResult} from '../search-result';

@Component({
  selector: 'app-search-result',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.css']
})
export class SearchResultComponent implements OnInit {

  result: SearchResult;

  constructor() { }

  ngOnInit() {
  }

}
