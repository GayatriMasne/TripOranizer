import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CampingpartyComponent } from './campingparty.component';

describe('CampingpartyComponent', () => {
  let component: CampingpartyComponent;
  let fixture: ComponentFixture<CampingpartyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CampingpartyComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CampingpartyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
