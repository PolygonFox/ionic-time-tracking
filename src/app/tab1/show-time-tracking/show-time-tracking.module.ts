import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ShowTimeTrackingPage } from './show-time-tracking.page';

const routes: Routes = [
  {
    path: '',
    component: ShowTimeTrackingPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ShowTimeTrackingPage]
})
export class ShowTimeTrackingPageModule {}
