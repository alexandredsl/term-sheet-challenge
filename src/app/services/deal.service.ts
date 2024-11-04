import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

export interface Deal {
  name: string;
  purchasePrice: number;
  address: string;
  noi: number;
}

@Injectable({
  providedIn: 'root',
})
export class DealService {
  private initialDeals: Deal[] = [
    { name: 'Deal 1', purchasePrice: 100000, address: '123 Main St', noi: 10000 },
    { name: 'Deal 2', purchasePrice: 200000, address: '456 Park Ave', noi: 15000 },
    { name: 'Deal 3', purchasePrice: 150000, address: '789 Broadway', noi: 12000 },
    { name: 'Deal 4', purchasePrice: 300000, address: '1010 Market St', noi: 25000 },
    { name: 'Deal 5', purchasePrice: 500000, address: '1111 Elm St', noi: 40000 },
    { name: 'Deal 6', purchasePrice: 750000, address: '1212 Maple Ave', noi: 60000 },
    { name: 'Deal 7', purchasePrice: 900000, address: '1313 Oak Dr', noi: 70000 },
    { name: 'Deal 8', purchasePrice: 450000, address: '1414 Pine St', noi: 35000 },
    { name: 'Deal 9', purchasePrice: 250000, address: '1515 Cedar Ln', noi: 20000 },
    { name: 'Deal 10', purchasePrice: 600000, address: '1616 Birch Rd', noi: 48000 },
    { name: 'Deal 11', purchasePrice: 850000, address: '1717 Spruce Ct', noi: 68000 },
    { name: 'Deal 12', purchasePrice: 700000, address: '1818 Aspen Way', noi: 55000 },
  ];

  private dealsSubject = new BehaviorSubject<Deal[]>(this.initialDeals);
  deals$: Observable<Deal[]> = this.dealsSubject.asObservable();

  constructor() { }

  addDeal(newDeal: Deal): void {
    const currentDeals = this.dealsSubject.getValue();
    this.dealsSubject.next([...currentDeals, newDeal]);
  }
}
