import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PunchBoardComponent } from './punch-board.component';

describe('PunchBoardComponent', () => {
  let component: PunchBoardComponent;
  let fixture: ComponentFixture<PunchBoardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PunchBoardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PunchBoardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
