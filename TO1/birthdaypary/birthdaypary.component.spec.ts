import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BirthdayparyComponent } from './birthdaypary.component';

describe('BirthdayparyComponent', () => {
  let component: BirthdayparyComponent;
  let fixture: ComponentFixture<BirthdayparyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BirthdayparyComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BirthdayparyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
