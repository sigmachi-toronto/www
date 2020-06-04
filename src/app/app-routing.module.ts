import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { RushComponent } from './components/rush/rush.component';
import { HistoryComponent } from './components/history/history.component';
import { ExecComponent } from './components/exec/exec.component';
import { PhilanthropyComponent } from './components/philanthropy/philanthropy.component';
import { ContactComponent } from './components/contact/contact.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: HomeComponent,
  },
  {
    path: 'rush',
    component: RushComponent,
    data: {title: 'Rush'}
  },
  {
    path: 'history',
    component: HistoryComponent,
    data: {title: 'History'}
  },
  {
    path: 'exec',
    component: ExecComponent,
    data: {title: 'Executive Team'}
  },
  {
    path: 'philanthropy',
    component: PhilanthropyComponent,
    data: {title: 'Philanthropy'}
  },
  {
    path: 'contact',
    component: ContactComponent,
    data: {title: 'Contact'}
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
