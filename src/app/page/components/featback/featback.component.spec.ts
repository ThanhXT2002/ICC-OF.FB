import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeatbackComponent } from './featback.component';

describe('FeatbackComponent', () => {
  let component: FeatbackComponent;
  let fixture: ComponentFixture<FeatbackComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FeatbackComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FeatbackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
