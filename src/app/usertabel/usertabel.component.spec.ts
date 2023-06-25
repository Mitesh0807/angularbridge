import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsertabelComponent } from './usertabel.component';

describe('UsertabelComponent', () => {
  let component: UsertabelComponent;
  let fixture: ComponentFixture<UsertabelComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [UsertabelComponent]
    });
    fixture = TestBed.createComponent(UsertabelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
