import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { QuizesListComponent } from './quizes-list/quizes-list.component';

const routes: Routes = [
  { path: 'quizeslist', component: QuizesListComponent },
  {
    path: 'quiz-details',
    loadChildren: () => import('./quiz-details/quiz-details.module').then( m => m.QuizDetailsPageModule)
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class QuizesRoutingModule { }
