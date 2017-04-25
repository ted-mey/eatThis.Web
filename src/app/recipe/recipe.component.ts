import { Component, OnInit } from '@angular/core';

import { RecipeService } from './recipe.service';
import { Recipe } from './recipe';
import { Ingredient } from './ingredient';

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.css']
})

export class RecipeComponent implements OnInit {
  recipes: Array<Recipe>;

  constructor(private recipeService: RecipeService) { }

  ngOnInit() {
/*    this.recipe = new Recipe();
    this.recipe.name = "Salt sill";
    let ingredients = new Array<Ingredient>();
    ingredients.push(new Ingredient("Salt"));
    this.recipe.ingredients = ingredients; */
    this.recipeService.getAllRecipes().subscribe(
                       recipes => this.recipes = recipes);
    console.log(this.recipes);
  }

}
