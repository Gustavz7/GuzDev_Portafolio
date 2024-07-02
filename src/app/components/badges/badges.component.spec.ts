import { ComponentFixture, TestBed } from '@angular/core/testing';

import { badgesComponent } from './badges.component';

describe('badgesComponent', () => {
  let component: badgesComponent;
  let fixture: ComponentFixture<badgesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ badgesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(badgesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
