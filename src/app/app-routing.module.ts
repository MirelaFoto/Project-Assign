import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeroPageComponent } from './views/hero-page/hero-page.component';
import { TodoPageComponent } from 'src/app/views/todo-page/todo-page.component';

const routes: Routes = [
  { path: '', redirectTo: 'hero-page', pathMatch: 'full' },
  { path: 'hero-page', component: HeroPageComponent },
  { path: 'todo-page', component: TodoPageComponent },
  
  { path: '**', redirectTo: 'hero-page' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
