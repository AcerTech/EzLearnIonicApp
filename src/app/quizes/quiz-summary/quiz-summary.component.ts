import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-quiz-summary',
  templateUrl: './quiz-summary.component.html',
  styleUrls: ['./quiz-summary.component.scss'],
})
export class QuizSummaryComponent implements OnInit {
  @Input() quizResult: any;
  constructor(
    private router: Router,
    private modalCtrl: ModalController
  ) { }

  ngOnInit() { }

  async closeModal() {
    await this.modalCtrl.dismiss();
  }

  backToListView() {
    this.router.navigate(['quizeslist'])
    this.closeModal()
  }

}
