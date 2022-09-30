import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { Question1Component } from './questions and challanges/question1/question1.component';
import { Question2Component } from './questions and challanges/question2/question2.component';
import { Question3Component } from './questions and challanges/question3/question3.component';
import { Question4Component } from './questions and challanges/question4/question4.component';
import { Question5Component } from './questions and challanges/question5/question5.component';
import { Question6Component } from './questions and challanges/question6/question6.component';
import { Question7Component } from './questions and challanges/question7/question7.component';

const routes: Routes = [
  { path: '', component: DashboardComponent },
  { path: 'question1', component: Question1Component },
  { path: 'question2', component: Question2Component },
  { path: 'question3', component: Question3Component },
  { path: 'question4', component: Question4Component },
  { path: 'question5', component: Question5Component },
  { path: 'question6', component: Question6Component },
  { path: 'question7', component: Question7Component },
  { path: '**', component: DashboardComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
