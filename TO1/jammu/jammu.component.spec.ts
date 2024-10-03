import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JammuComponent } from './jammu.component';

describe('JammuComponent', () => {
  let component: JammuComponent;
  let fixture: ComponentFixture<JammuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [JammuComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(JammuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
