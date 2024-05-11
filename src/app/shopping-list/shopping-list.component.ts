import { Component, OnDestroy, OnInit } from '@angular/core';
import { Ingredients } from '../shared/ingredient.modal';
import { ShoppingListService } from './shopping-list.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrl: './shopping-list.component.css',
})
export class ShoppingListComponent implements OnInit, OnDestroy {
  ingredients: Ingredients[];
  private igChangeSub: Subscription;
  //  = [ new Ingredients('Apples', 5),
  //   new Ingredients('Tomatoes', 10),
  // ];
  constructor(private slService: ShoppingListService) {}
  ngOnInit() {
    this.ingredients = this.slService.getIngredient();
    this.igChangeSub = this.slService.ingredientsChanged.subscribe(
      (ingredients: Ingredients[]) => {
        this.ingredients = ingredients;
      }
    );
  }

  // onIngredientAdded(ingredient: Ingredients) {
  //   this.ingredients.push(ingredient);
  // }

  ngOnDestroy() : void{
    this.igChangeSub.unsubscribe();
  }
}
