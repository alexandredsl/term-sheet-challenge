import { Routes } from '@angular/router';
import { AddDealComponent } from './components/add-deal/add-deal.component';
import { DealsListComponent } from './components/deals-list/deals-list.component';

export const routes: Routes = [
    { path: '', component: DealsListComponent },
];
