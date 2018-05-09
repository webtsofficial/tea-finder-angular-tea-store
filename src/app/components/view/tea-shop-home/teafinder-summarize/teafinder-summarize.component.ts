import { Component, OnInit } from '@angular/core';
import {faFilter} from '@fortawesome/free-solid-svg-icons/faFilter';
import {faLeaf} from '@fortawesome/free-solid-svg-icons/faLeaf';
import {faShoppingCart} from '@fortawesome/free-solid-svg-icons/faShoppingCart';

@Component({
  selector: 'app-teafinder-summarize',
  templateUrl: './teafinder-summarize.component.html',
  styleUrls: ['./teafinder-summarize.component.scss']
})
export class TeafinderSummarizeComponent implements OnInit {
  faShoppingCard = faShoppingCart;
  faFilter = faFilter;
  faLeaf = faLeaf;

  constructor() { }

  ngOnInit() {
  }

}
