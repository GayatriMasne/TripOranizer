import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShimlaComponent } from './shimla.component';

describe('ShimlaComponent', () => {
  let component: ShimlaComponent;
  let fixture: ComponentFixture<ShimlaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ShimlaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ShimlaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
