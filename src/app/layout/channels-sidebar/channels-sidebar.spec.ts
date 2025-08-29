import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChannelsSidebar } from './channels-sidebar';

describe('ChannelsSidebar', () => {
  let component: ChannelsSidebar;
  let fixture: ComponentFixture<ChannelsSidebar>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChannelsSidebar]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChannelsSidebar);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
