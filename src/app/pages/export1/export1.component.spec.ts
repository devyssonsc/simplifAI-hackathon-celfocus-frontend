import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Export1Component } from './export1.component';

describe('Export1Component', () => {
  let component: Export1Component;
  let fixture: ComponentFixture<Export1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Export1Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Export1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
