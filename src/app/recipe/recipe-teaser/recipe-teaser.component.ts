import { Component, OnInit, Input } from '@angular/core';

import { Recipe } from '../recipe'

@Component({
  selector: 'app-recipe-teaser',
  templateUrl: './recipe-teaser.component.html',
  styleUrls: ['./recipe-teaser.component.css']
})

export class RecipeTeaserComponent {
  @Input()
  recipe: Recipe;
}
