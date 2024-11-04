import { Pipe, PipeTransform } from '@angular/core';
import { Deal } from '../../services/deal.service';

@Pipe({
  name: 'capRate',
  standalone: true,
})
export class CapRatePipe implements PipeTransform {
  transform(deal: Deal): string {
    const capRate = (deal.noi / deal.purchasePrice) * 100;
    return `${capRate.toFixed(2)}%`;
  }
}
