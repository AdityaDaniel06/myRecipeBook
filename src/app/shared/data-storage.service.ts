import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { RecipeService } from '../recipes/recipe.service';
import { Recipe } from '../recipes/recipe.model';
import { map, tap } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class DataStorageService {
  constructor(private http: HttpClient, private recipeService: RecipeService) {}

  storeRecipes() {
    const recipes = this.recipeService.getRecipes();
    //  return this.http.put('https://recipe-book-71d3d-default-rtdb.firebaseio.com/recipes.json' , recipes);
    // subscribe can be done in component as well
    this.http
      .put(
        'https://recipe-book-71d3d-default-rtdb.firebaseio.com/recipes.json',
        recipes
      )
      .subscribe((res) => console.log(res));
  }

  fetchRecipes() {
     return this.http
      .get<Recipe[]>(
        'https://recipe-book-71d3d-default-rtdb.firebaseio.com/recipes.json'
      )
      .pipe(
        map((recipes) => {
          return recipes.map((recipes) => {
            return {
              ...recipes,
              ingredients: recipes.ingredients ? recipes.ingredients : []
            };
          });
        }),
        tap( data => {

            this.recipeService.setRecipes(data);
        })
      )
      
  }
}
