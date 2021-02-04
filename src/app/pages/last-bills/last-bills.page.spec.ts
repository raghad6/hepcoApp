import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { LastBillsPage } from './last-bills.page';

describe('LastBillsPage', () => {
  let component: LastBillsPage;
  let fixture: ComponentFixture<LastBillsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LastBillsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(LastBillsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
