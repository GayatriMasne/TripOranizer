import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BachelorpartyComponent } from './bachelorparty.component';

describe('BachelorpartyComponent', () => {
  let component: BachelorpartyComponent;
  let fixture: ComponentFixture<BachelorpartyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BachelorpartyComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BachelorpartyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
