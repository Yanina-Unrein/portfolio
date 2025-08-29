import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MemberItem } from './member-item';

describe('MemberItem', () => {
  let component: MemberItem;
  let fixture: ComponentFixture<MemberItem>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MemberItem]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MemberItem);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
