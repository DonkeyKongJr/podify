import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PodsOverviewComponent } from './pods-overview.component';

describe('PodsOverviewComponent', () => {
  let component: PodsOverviewComponent;
  let fixture: ComponentFixture<PodsOverviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PodsOverviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PodsOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
