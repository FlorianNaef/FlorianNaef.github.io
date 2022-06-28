import { Component, OnInit } from '@angular/core';

import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('Test Recipe','Testy Dish','https://imgs.search.brave.com/CwYbFTU0dU6GhH8YECvnbWPVOgqQlW_QjQnJ_YGJB1w/rs:fit:1200:1200:1/g:ce/aHR0cHM6Ly93d3cu/amFja3NwaWNlcmFk/YW1zLmNvbS93cC1j/b250ZW50L3VwbG9h/ZHMvMjAxNy8wNS9D/YWZlLVNveWEtMDEu/anBn'),
    new Recipe('Test Recipe','Testy Dish','https://imgs.search.brave.com/CwYbFTU0dU6GhH8YECvnbWPVOgqQlW_QjQnJ_YGJB1w/rs:fit:1200:1200:1/g:ce/aHR0cHM6Ly93d3cu/amFja3NwaWNlcmFk/YW1zLmNvbS93cC1j/b250ZW50L3VwbG9h/ZHMvMjAxNy8wNS9D/YWZlLVNveWEtMDEu/anBn'),
    new Recipe('Test Recipe','Testy Dish','https://imgs.search.brave.com/CwYbFTU0dU6GhH8YECvnbWPVOgqQlW_QjQnJ_YGJB1w/rs:fit:1200:1200:1/g:ce/aHR0cHM6Ly93d3cu/amFja3NwaWNlcmFk/YW1zLmNvbS93cC1j/b250ZW50L3VwbG9h/ZHMvMjAxNy8wNS9D/YWZlLVNveWEtMDEu/anBn')

  ];


  constructor() { }

  ngOnInit(): void {
  }

}
