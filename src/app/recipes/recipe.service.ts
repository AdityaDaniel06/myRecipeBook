import { EventEmitter, Injectable } from '@angular/core';
import { Recipe } from './recipe.model';
import { Ingredients } from '../shared/ingredient.modal';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable({ // needed when services injected in a serivce
  providedIn: 'root',
})
export class RecipeService {

  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [new Recipe(
      'Big fat Burger',
      'What else you need to say?',
      'https://t3.ftcdn.net/jpg/02/44/61/14/360_F_244611436_4WKrV3YAOBo0LKe9S7hoXv55aDmgwvwr.jpg',
      [
        new Ingredients('Meat', 1),
        new Ingredients('Buns', 2),
        new Ingredients('French Fries' , 40)  
      ]
    ),
    new Recipe(
      'Chessy Pizza',
      'Could it be anymore chessy!',
      'https://e0.pxfuel.com/wallpapers/16/628/desktop-wallpaper-pizza-cheese-pizza.jpg',
      [
        new Ingredients('Flour', 1),
        new Ingredients('Tomato', 6),
        new Ingredients('Olives' , 8),
        new Ingredients('Sweet Corns' , 2)  
      ]
    ),
    new Recipe(
      'Pesto Pasta',
      "It can't get any better than this..",
      'https://img.freepik.com/free-photo/top-view-delicious-pasta-table_23-2150857992.jpg',
      [
        new Ingredients('Pasta', 1),
        new Ingredients('Tomato', 2),
        new Ingredients('Spanich' , 4),
      ]
    ),


  ];

  constructor(private slService: ShoppingListService) {}
  getRecipes() {
    return this.recipes.slice();
  }
  getRecipe(index: number){
    return this.recipes[index];
  }

  addIngredientsToShoppingList(ingredients: Ingredients[]){
    this.slService.addingredients(ingredients);
  }
}
