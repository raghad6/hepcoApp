import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PremiumsPage } from './premiums.page';

describe('PremiumsPage', () => {
  let component: PremiumsPage;
  let fixture: ComponentFixture<PremiumsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PremiumsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PremiumsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
