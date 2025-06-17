import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MoneymathComponent } from './moneymath.component';

describe('MoneymathComponent', () => {
  let component: MoneymathComponent;
  let fixture: ComponentFixture<MoneymathComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MoneymathComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MoneymathComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
