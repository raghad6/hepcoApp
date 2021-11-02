import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ErrorsPage } from './errors.page';

describe('ErrorsPage', () => {
  let component: ErrorsPage;
  let fixture: ComponentFixture<ErrorsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ErrorsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ErrorsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
