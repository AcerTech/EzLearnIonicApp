import { Component, OnInit, OnDestroy } from '@angular/core';
import { Quiz, Grade, Subject, Question } from 'src/app/interfaces';
import { LoadingController } from '@ionic/angular';
import { Subscription, Observable } from 'rxjs';
import { QuizesService } from '../quizes.service';
import { NavController } from '@ionic/angular';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { Storage } from '@ionic/storage';

import * as _ from "lodash";
import { Router, NavigationExtras } from '@angular/router';
import { LoadingService } from 'src/app/services/index';

@Component({
  selector: 'app-quizes-list',
  templateUrl: './quizes-list.component.html',
  styleUrls: ['./quizes-list.component.scss'],
})
export class QuizesListComponent implements OnInit, OnDestroy {
  questionsList: Question[] = []
  gradesList: Grade[] = []
  subjectsList: Subject[] = []
  sub: Subscription;
  errorMsg: any;
  defaultGradeId: string;
  defaultSubjectId: string

  chaptersGroupedList: any[] = []
  quizesGroupedList: any[] = []

  constructor(
    // private fb: FormBuilder,
    private quizService: QuizesService,
    private router: Router,
    private storage: Storage,
    public loading: LoadingService
  ) {
    // this.createForm();
  }



  async ngOnInit() {
    await this.getGrades();
    this.storage.get('subjectId').then((val) => {
      console.log('subjectId is', val);
    });

  }



  getGrades() {
    this.loading.present();
    this.sub = this.quizService.getGrades().subscribe(
      data => {
        this.gradesList = data
      }, (err: any) => {
        this.errorMsg = err
      }, () => {
        console.log(this.gradesList)
        this.storage.get('gradeId').then((val) => {
          console.log('gradeId is', val);
          if (val) {
            this.defaultGradeId = val;
          } else {
            this.defaultGradeId = this.gradesList[0]._id;
          }
        });
        this.loading.dismiss();
        this.onGradeChange(this.defaultGradeId)
      }
    )

  }

  async onGradeChange(selectedGrade) {
    this.questionsList = []
    this.subjectsList = []
    this.quizesGroupedList = []
    this.chaptersGroupedList = []
    this.defaultSubjectId = ''
    if (selectedGrade) {
      await this.getSubjectsByGridId(selectedGrade.detail.value)
      this.storage.set("gradeId", selectedGrade.detail.value)
    }
  }

  onSubjectChange(selectedSubject) {
    this.getQuestionsForSubject(selectedSubject.detail.value)
    this.storage.set("subjectId", selectedSubject.detail.value)
    this.defaultSubjectId = selectedSubject.detail.value
  }

  getSubjectsByGridId(gradeId: string) {
    this.loading.present();
    this.questionsList = []
    this.sub = this.quizService.getSubjectsByGradeId(gradeId).subscribe(
      data => {
        this.subjectsList = data
      }, (err: any) => {
        this.errorMsg = err
      }, () => {
        this.loading.dismiss();
        this.storage.get('subjectId').then((val) => {
          console.log('subjectId is', val);
          if (val) {
            this.defaultSubjectId = val;
          } else {
            this.defaultSubjectId = this.subjectsList[0]._id
          }
        });

      }
    )

  }



  getQuestionsForSubject(subjectId: string) {

    this.sub = this.quizService.getQuestionsBySubjectId(subjectId).subscribe(
      data => {
        this.questionsList = data
      }, (err: any) => {
        this.errorMsg = err
      },
      () => {
        this.getQuizList()
      }
    )
  }



  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  onSelecteQuiz(selectedQuiz) {
    console.log(selectedQuiz)
    // this.navCtrl.navigateForward('/quiz-details/')
    let navExtras: NavigationExtras = {
      state: {
        quiz: selectedQuiz
      }
    }
    this.router.navigate(['quiz-details'], navExtras)
  }

  getQuizList() {

    // this.chaptersGroupedList = _.chain(this.questionsList)
    //   .groupBy("chapter.name")
    //   .map((value, key) => ({ chapter: key, quizes: value }))
    //   .value()
    // console.log("1", this.chaptersGroupedList)

    this.chaptersGroupedList = _.chain(this.questionsList)
      .groupBy("chapter.name")
      .map((value, key) => ({ chapter: key, quizes: _.chain(value).groupBy("quiz.name").map((value, key) => ({ quiz: key, questions: value })).value() }))
      .value()

    // console.log("2", this.chaptersGroupedList)

  }




}
