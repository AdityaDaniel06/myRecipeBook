import {
  Component,
  EventEmitter,
  OnDestroy,
  OnInit,
  Output,
} from '@angular/core';
import { DataStorageService } from '../shared/data-storage.service';
import { AuthService } from '../auth/auth.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent implements OnInit, OnDestroy {
  private userSub: Subscription;
  isAuthenticated = false;
  constructor(
    public dataStorageService: DataStorageService,
    private authService: AuthService
  ) {}
  // @Output() featureSelected = new EventEmitter<string>();
  // onSelect(feature: string) {
  //   this.featureSelected.emit(feature);
  // }
  ngOnInit(): void {
    this.userSub = this.authService.user.subscribe((user) => {
      this.isAuthenticated = !!user;
      console.log(!user);
      console.log(!!user);
    });
  }
  onSaveData() {
    //post data
    this.dataStorageService.storeRecipes();
  }
  onFetchData() {
    //get data
    this.dataStorageService.fetchRecipes().subscribe();
  }

  onLogout(){
    this.authService.logout();
  }
  ngOnDestroy(): void {
    this.userSub.unsubscribe();
  }
}
