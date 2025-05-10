import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PunchInDialogComponent } from './punch-in-dialog.component';

describe('PunchInDialogComponent', () => {
  let component: PunchInDialogComponent;
  let fixture: ComponentFixture<PunchInDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PunchInDialogComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PunchInDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
