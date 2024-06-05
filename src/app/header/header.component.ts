import { Component, EventEmitter, Output } from '@angular/core';
import { DataStorageService } from '../shared/data-storage.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {
  constructor(public dataStorageService: DataStorageService) {}
  // @Output() featureSelected = new EventEmitter<string>();
  // onSelect(feature: string) {
  //   this.featureSelected.emit(feature);
  // }
  onSaveData() {
    //post data
    this.dataStorageService.storeRecipes();
  }
  onFetchData(){
    //get data
    this.dataStorageService.fetchRecipes().subscribe();
  }
}
