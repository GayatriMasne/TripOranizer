import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GrouptripComponent } from './grouptrip.component';

describe('GrouptripComponent', () => {
  let component: GrouptripComponent;
  let fixture: ComponentFixture<GrouptripComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GrouptripComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GrouptripComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
