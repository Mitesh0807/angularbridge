import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoletabelComponent } from './roletabel.component';

describe('RoletabelComponent', () => {
  let component: RoletabelComponent;
  let fixture: ComponentFixture<RoletabelComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RoletabelComponent]
    });
    fixture = TestBed.createComponent(RoletabelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
