import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabelwrapperComponent } from './tabelwrapper.component';

describe('TabelwrapperComponent', () => {
  let component: TabelwrapperComponent;
  let fixture: ComponentFixture<TabelwrapperComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [TabelwrapperComponent]
    });
    fixture = TestBed.createComponent(TabelwrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
