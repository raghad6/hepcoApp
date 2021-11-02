import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MyCounterPage } from './my-counter.page';

describe('MyCounterPage', () => {
  let component: MyCounterPage;
  let fixture: ComponentFixture<MyCounterPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyCounterPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MyCounterPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
