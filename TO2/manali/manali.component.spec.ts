import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManaliComponent } from './manali.component';

describe('ManaliComponent', () => {
  let component: ManaliComponent;
  let fixture: ComponentFixture<ManaliComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ManaliComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ManaliComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
