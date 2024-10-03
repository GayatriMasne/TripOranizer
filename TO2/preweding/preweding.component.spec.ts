import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrewedingComponent } from './preweding.component';

describe('PrewedingComponent', () => {
  let component: PrewedingComponent;
  let fixture: ComponentFixture<PrewedingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PrewedingComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PrewedingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
