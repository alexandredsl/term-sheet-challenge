import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-deal-filter',
  standalone: true,
  templateUrl: './deal-filter.component.html',
})
export class DealFilterComponent {
  @Output() nameFilter = new EventEmitter<string>();
  @Output() priceFilter = new EventEmitter<number>();

  filterByName(event: Event) {
    const name = (event.target as HTMLInputElement).value;
    this.nameFilter.emit(name);
  }

  filterByPrice(event: Event) {
    const price = parseFloat((event.target as HTMLInputElement).value);
    this.priceFilter.emit(price);
  }
}