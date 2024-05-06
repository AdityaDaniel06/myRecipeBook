import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrl: './recipe-list.component.css',
})
export class RecipeListComponent implements OnInit{
  // @Output() recipeWasSelected = new EventEmitter<Recipe>();
  recipes: Recipe[] 
  // = [ new Recipe(
  //     'A Test recipe',
  //     'The description of the Test Recipe',
  //     'https://t3.ftcdn.net/jpg/02/44/61/14/360_F_244611436_4WKrV3YAOBo0LKe9S7hoXv55aDmgwvwr.jpg'
  //   ),
  // ];
  constructor(private recipeService: RecipeService){}
  ngOnInit() {
    this.recipes = this.recipeService.getRecipes();
  }
  // onRecipeSelected(recipe: Recipe) {
  //   this.recipeWasSelected.emit(recipe);
  // }
}
