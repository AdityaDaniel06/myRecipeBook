import {
  Component,
  ElementRef,
  EventEmitter,
  OnDestroy,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';
import { Ingredients } from '../../shared/ingredient.modal';
import { ShoppingListService } from '../shopping-list.service';
import { FormGroup, NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrl: './shopping-edit.component.css',
})
export class ShoppingEditComponent implements OnInit, OnDestroy {
  // @ViewChild('nameInput', { static: false }) nameInputRef: ElementRef;
  // @ViewChild('amountInput', { static: false }) amountInputRef: ElementRef;
  // ingredientAdded = new EventEmitter<{name: string, amount: number}>();
  // @Output() ingredientAdded = new EventEmitter<Ingredients>();
  @ViewChild('f', { static: false }) slform: NgForm;

  subscription: Subscription;
  editMode = false;
  editedItemIndex: number;
  editedItem: Ingredients;

  constructor(private slService: ShoppingListService) {}
  ngOnInit(): void {
    this.subscription = this.slService.startedEditing.subscribe(
      (index: number) => {
        this.editedItemIndex = index;
        this.editMode = true;
        this.editedItem = this.slService.getIngredient(index);
        this.slform.setValue({
          name: this.editedItem.name,
          amount: this.editedItem.amount,
        });
      }
    );
  }
  onSubmit(form: NgForm) {
    // const ingName = this.nameInputRef.nativeElement.value;
    // const ingAmount = this.amountInputRef.nativeElement.value;
    const value = form.value;
    const newIngredient = new Ingredients(value.name, value.amount);
    if(this.editMode){
      this.slService.updateIngredient(this.editedItemIndex, newIngredient);
      this.editMode = false;
      // this.editedItemIndex = -1;
      this.slform.reset();
      return ;
    }else{
      this.slService.addIngredient(newIngredient);

    }
    // this.ingredientAdded.emit(newIngredient);
  }

  onClear(){
    this.slform.reset();
    this.editMode = false;
  }
  onDelete(){
    this.slService.deleteIngredient(this.editedItemIndex)
    this.onClear();
  }
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
