import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BtnDiscoveryComponent } from './btn-discovery.component';

describe('BtnDiscoveryComponent', () => {
  let component: BtnDiscoveryComponent;
  let fixture: ComponentFixture<BtnDiscoveryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BtnDiscoveryComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BtnDiscoveryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
