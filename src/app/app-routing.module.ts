import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListRecipesComponent } from './recipe/list-recipes/list-recipes.component';
import { RecipeComponent } from './recipe/recipe/recipe.component';

const routes: Routes = [
  { path: '', component: ListRecipesComponent },
  { path: 'recipe/:id', component: RecipeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
