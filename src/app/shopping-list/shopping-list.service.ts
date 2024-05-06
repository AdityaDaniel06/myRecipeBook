import { EventEmitter, Injectable } from '@angular/core';
import { Ingredients } from '../shared/ingredient.modal';

@Injectable({
  providedIn: 'root',
})
export class ShoppingListService {
  ingredientsChanged = new EventEmitter<Ingredients[]>();

  private ingredients: Ingredients[] = [
    new Ingredients('Apples', 5),
    new Ingredients('Tomatoes', 10),
  ];

  getIngredient() {
    return this.ingredients.slice();
  }

  addIngredient(ingredent: Ingredients) {
    this.ingredients.push(ingredent);
    this.ingredientsChanged.emit(this.ingredients.slice());
    
  }

  addingredients(ingredients: Ingredients[]) {
    this.ingredients.push(...ingredients);
    this.ingredientsChanged.emit(this.ingredients.slice())
  }
}
