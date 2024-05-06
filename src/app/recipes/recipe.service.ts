import { EventEmitter, Injectable } from '@angular/core';
import { Recipe } from './recipe.model';
import { Ingredients } from '../shared/ingredient.modal';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable({ // needed when services injected in a serivce
  providedIn: 'root',
})
export class RecipeService {

  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe(
      'Big fat Burger',
      'What else you need to say?',
      'https://t3.ftcdn.net/jpg/02/44/61/14/360_F_244611436_4WKrV3YAOBo0LKe9S7hoXv55aDmgwvwr.jpg',
      [
        new Ingredients('Meat', 1),
        new Ingredients('Buns', 2),
        new Ingredients('French Fries' , 40)  
      ]
    ),
  ];

  constructor(private slService: ShoppingListService) {}
  getRecipes() {
    return this.recipes.slice();
  }

  addIngredientsToShoppingList(ingredients: Ingredients[]){
    this.slService.addingredients(ingredients);
  }
}
