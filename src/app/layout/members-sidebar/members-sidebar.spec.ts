import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MembersSidebar } from './members-sidebar';

describe('MembersSidebar', () => {
  let component: MembersSidebar;
  let fixture: ComponentFixture<MembersSidebar>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MembersSidebar]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MembersSidebar);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
