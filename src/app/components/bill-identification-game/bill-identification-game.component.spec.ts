import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BillIdentificationGameComponent } from './bill-identification-game.component';

describe('BillIdentificationGameComponent', () => {
  let component: BillIdentificationGameComponent;
  let fixture: ComponentFixture<BillIdentificationGameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BillIdentificationGameComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BillIdentificationGameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
