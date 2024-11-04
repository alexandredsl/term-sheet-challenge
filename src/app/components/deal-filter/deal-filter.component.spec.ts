import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DealFilterComponent } from './deal-filter.component';

describe('DealFilterComponent', () => {
  let component: DealFilterComponent;
  let fixture: ComponentFixture<DealFilterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DealFilterComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DealFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
