import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AddsPage } from './adds.page';

describe('AddsPage', () => {
  let component: AddsPage;
  let fixture: ComponentFixture<AddsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AddsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
