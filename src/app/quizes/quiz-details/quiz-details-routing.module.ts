import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { QuizDetailsPage } from './quiz-details.page';

const routes: Routes = [
  {
    path: '',
    component: QuizDetailsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class QuizDetailsPageRoutingModule {}
