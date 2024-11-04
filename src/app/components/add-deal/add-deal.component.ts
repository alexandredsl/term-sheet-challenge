import { Component, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { InputNumberModule } from 'primeng/inputnumber';
import { ButtonModule } from 'primeng/button';
import { MessageService } from 'primeng/api';
import { Deal } from '../../services/deal.service';
import { KeyFilterModule } from 'primeng/keyfilter';

@Component({
  selector: 'app-add-deal',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    InputTextModule,
    InputNumberModule,
    ButtonModule,
    KeyFilterModule
  ],
  providers: [MessageService],
  templateUrl: './add-deal.component.html',
})
export class AddDealComponent {
  @Output() dealAdded = new EventEmitter<Deal>();
  dealForm: FormGroup;

  constructor(private fb: FormBuilder, private messageService: MessageService) {
    this.dealForm = this.fb.group({
      name: ['', Validators.required],
      purchasePrice: [0, Validators.required],
      address: ['', Validators.required],
      noi: [0, Validators.required],
    });
  }

  addDeal() {
    if (this.dealForm.valid) {
      const newDeal: Deal = this.dealForm.value;
      this.dealAdded.emit(newDeal);
      this.showSuccess();
      this.dealForm.reset();
    } else {
      Object.keys(this.dealForm.controls).forEach(field => {
        const control = this.dealForm.get(field);
        control?.markAsTouched({ onlySelf: true });
        control?.markAsDirty({ onlySelf: true });
      });
      this.showError();
    }
  }

  showSuccess() {
    this.messageService.add({
      severity: 'success',
      summary: 'Success',
      detail: 'Deal added successfully',
    });
  }

  showError() {
    this.messageService.add({
      severity: 'error',
      summary: 'Error',
      detail: 'Please fill in all required fields',
    });
  }
}