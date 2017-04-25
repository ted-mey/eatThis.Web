import { Component, OnInit, Input } from '@angular/core';

import { RecipeService } from '../recipe.service';
import { Recipe } from '../recipe';
import { Ingredient } from '../ingredient';

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.css']
})

export class RecipeComponent implements OnInit {
  @Input()
  recipe: Recipe;

  constructor(private recipeService: RecipeService) { }

  ngOnInit() {  }

}
