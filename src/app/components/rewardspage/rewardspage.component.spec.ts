import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RewardspageComponent } from './rewardspage.component';

describe('RewardspageComponent', () => {
  let component: RewardspageComponent;
  let fixture: ComponentFixture<RewardspageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RewardspageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RewardspageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
