import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'highlight',
  standalone: true
})
export class HighlightPipe implements PipeTransform {

  transform(value: string, searchTerm: string): string {
    if (!searchTerm) {
      return value; // Retorna o valor original se não houver termo de pesquisa
    }

    const sanitizedSearchTerm = searchTerm.replace(/[.*+?^${}()|[\]\\]/g, ''); // Remove caracteres especiais
    const regex = new RegExp(`(${sanitizedSearchTerm})`, 'gi'); // Cria uma regex ignorando maiúsculas/minúsculas
    return value.replace(regex, '<span class="highlight">$1</span>'); // Envolve o termo com a classe highlight
  }
}