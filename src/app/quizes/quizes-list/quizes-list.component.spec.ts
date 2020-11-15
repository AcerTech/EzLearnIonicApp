import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { QuizesListComponent } from './quizes-list.component';

describe('QuizesListComponent', () => {
  let component: QuizesListComponent;
  let fixture: ComponentFixture<QuizesListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuizesListComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(QuizesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
