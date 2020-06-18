import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SidePanelTestComponent } from './side-panel-test.component';

describe('SidePanelTestComponent', () => {
  let component: SidePanelTestComponent;
  let fixture: ComponentFixture<SidePanelTestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SidePanelTestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SidePanelTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
