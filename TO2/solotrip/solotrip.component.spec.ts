import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SolotripComponent } from './solotrip.component';

describe('SolotripComponent', () => {
  let component: SolotripComponent;
  let fixture: ComponentFixture<SolotripComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SolotripComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SolotripComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
