import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { QuizesRoutingModule } from './quizes-routing.module';
import { QuizesService } from './quizes.service';
import { QuizesListComponent } from './quizes-list/quizes-list.component';


@NgModule({
  declarations: [
    QuizesListComponent

  ],
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    QuizesRoutingModule
  ],
  providers: [QuizesService]
})
export class QuizesModule { }
