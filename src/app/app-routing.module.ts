import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutDevComponent } from './components/about-dev/about-dev.component';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'about-dev',
    component: AboutDevComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
