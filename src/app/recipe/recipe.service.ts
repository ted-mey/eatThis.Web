import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { Recipe } from './recipe';


@Injectable()
export class RecipeService {

  constructor(private http: Http) { }

  public getAllRecipes(): Observable<Array<Recipe>> {
    return this.http.get("./static-recipes.json").map((res:any) => res.json()).catch(this.handleError);
  }

  private handleError (error: Response | any) {
    console.log(error);
    return Observable.throw(error);
  }

}
