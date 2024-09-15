import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DragToggleComponent } from './drag-toggle.component';

describe('DragToggleComponent', () => {
  let component: DragToggleComponent;
  let fixture: ComponentFixture<DragToggleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DragToggleComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DragToggleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
