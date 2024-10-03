import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MunnerComponent } from './munner.component';

describe('MunnerComponent', () => {
  let component: MunnerComponent;
  let fixture: ComponentFixture<MunnerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MunnerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MunnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
