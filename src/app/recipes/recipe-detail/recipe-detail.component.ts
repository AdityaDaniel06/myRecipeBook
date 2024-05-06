import { Component, Input, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrl: './recipe-detail.component.css',
})
export class RecipeDetailComponent implements OnInit {
  constructor(private recipeService: RecipeService ,
    private route: ActivatedRoute,
  ) {}
   recipe: Recipe;
   id: number;

  ngOnInit() {
   this.route.params.subscribe( (params: Params) => {
    this.id = +params['id'];
   })
  }

  onAddToShoppingList() {
    this.recipeService.addIngredientsToShoppingList(this.recipe.ingredients);
  }
}