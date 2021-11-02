import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { LastPaidPage } from './last-paid.page';

describe('LastPaidPage', () => {
  let component: LastPaidPage;
  let fixture: ComponentFixture<LastPaidPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LastPaidPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(LastPaidPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
