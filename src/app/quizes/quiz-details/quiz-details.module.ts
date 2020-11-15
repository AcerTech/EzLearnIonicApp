import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { QuizDetailsPageRoutingModule } from './quiz-details-routing.module';

import { QuizDetailsPage } from './quiz-details.page';
import { QuizSummaryComponent } from '../quiz-summary/quiz-summary.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    QuizDetailsPageRoutingModule
  ],
  declarations: [
    QuizDetailsPage,
    QuizSummaryComponent
  ]
})
export class QuizDetailsPageModule { }
