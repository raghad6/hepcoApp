import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ConsumptionPage } from './consumption.page';

describe('ConsumptionPage', () => {
  let component: ConsumptionPage;
  let fixture: ComponentFixture<ConsumptionPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConsumptionPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ConsumptionPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
