import { AsyncPipe, CurrencyPipe } from '@angular/common';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MessageService } from 'primeng/api';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';
import { Table, TableModule } from 'primeng/table';
import { BehaviorSubject, Observable, combineLatest, map } from 'rxjs';
import { Deal, DealService } from '../../services/deal.service';
import { CapRatePipe } from '../../shared/pipes/cap-rate.pipe';
import { HighlightPipe } from '../../shared/pipes/highlight.pipe';
import { AddDealComponent } from '../add-deal/add-deal.component';
import { DealFilterComponent } from '../deal-filter/deal-filter.component';

@Component({
  selector: 'app-deals-list',
  standalone: true,
  imports: [
    CapRatePipe,
    CurrencyPipe,
    HighlightPipe,
    AsyncPipe,
    AddDealComponent,
    DealFilterComponent,
    TableModule,
    DialogModule,
    ButtonModule,
  ],
  providers: [MessageService],
  templateUrl: './deals-list.component.html',
})
export class DealsListComponent implements OnInit {
  @ViewChild('dealsTable') dealsTable: Table


  deals$!: Observable<Deal[]>;
  filteredDeals$!: Observable<Deal[]>;
  showAddDealModal: boolean = false;

  private nameFilterSubject = new BehaviorSubject<string>('');
  private priceFilterSubject = new BehaviorSubject<number | null>(null);

  constructor(private dealService: DealService) { }

  ngOnInit(): void {
    this.deals$ = this.dealService.deals$;

    this.filteredDeals$ = combineLatest([
      this.deals$,
      this.nameFilterSubject.asObservable(),
      this.priceFilterSubject.asObservable(),
    ]).pipe(
      map(([deals, name, price]) =>
        deals.filter(deal =>
          deal.name.toLowerCase().includes(name.toLowerCase()) &&
          (price === null || deal.purchasePrice >= price)
        )
      )
    );
  }

  onDealAdded(newDeal: Deal): void {
    this.dealService.addDeal(newDeal);
  }

  onNameFilter(name: string): void {
    this.nameFilterSubject.next(name);
  }

  onPriceFilter(price: number): void {
    this.priceFilterSubject.next(price);
  }
}