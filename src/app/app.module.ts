import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RecipeComponent } from './recipe/recipe/recipe.component';
import { RecipeService } from './recipe/recipe.service';
import { ListRecipesComponent } from './recipe/list-recipes/list-recipes.component';


@NgModule({
  declarations: [
    AppComponent,
    RecipeComponent,
    ListRecipesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [RecipeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
