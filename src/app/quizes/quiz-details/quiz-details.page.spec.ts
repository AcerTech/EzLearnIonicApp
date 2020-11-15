import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { QuizDetailsPage } from './quiz-details.page';

describe('QuizDetailsPage', () => {
  let component: QuizDetailsPage;
  let fixture: ComponentFixture<QuizDetailsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuizDetailsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(QuizDetailsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
