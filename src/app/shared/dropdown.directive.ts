import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appDropdown]',
})
export class DropdownDirective {
  constructor() {}
  @HostBinding('class.open') isOpen: boolean = false;
  // host binding: allows us to bind propreties of the elemnt the directive is placed on
  // class property : open(to open the dropdown)

  // toggle dropdown on click event
  @HostListener('click') toggleOpen() {
    this.isOpen = !this.isOpen; //isOpen is true then open class is attached
  }

 
}

// Used in: recipe-detail , header
