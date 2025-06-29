import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PunchboardHistoryComponent } from './punchboard-history.component';

describe('PunchboardHistoryComponent', () => {
  let component: PunchboardHistoryComponent;
  let fixture: ComponentFixture<PunchboardHistoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PunchboardHistoryComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PunchboardHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
