import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServerIconComponentButton } from './server-icon-component-button';

describe('ServerIconComponentButton', () => {
  let component: ServerIconComponentButton;
  let fixture: ComponentFixture<ServerIconComponentButton>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ServerIconComponentButton]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ServerIconComponentButton);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
