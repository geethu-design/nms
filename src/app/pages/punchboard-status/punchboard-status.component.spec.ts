import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PunchboardStatusComponent } from './punchboard-status.component';

describe('PunchboardStatusComponent', () => {
  let component: PunchboardStatusComponent;
  let fixture: ComponentFixture<PunchboardStatusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PunchboardStatusComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PunchboardStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
