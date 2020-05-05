import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CandyPage } from './candy.page';

describe('CandyPage', () => {
  let component: CandyPage;
  let fixture: ComponentFixture<CandyPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CandyPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CandyPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
