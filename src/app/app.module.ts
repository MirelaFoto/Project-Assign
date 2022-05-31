import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeroCardComponent } from './components/hero-card/hero-card.component';
import { TodoPageComponent } from './components/todo-page/todo-page.component';
import { TodoListComponent } from './components/todo-list/todo-list.component';
import { TodoListItemComponent } from './components/todo-list-item/todo-list-item.component';
import { HeroPageComponent } from './hero-page/hero-page.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { TodoFormComponent } from './todo-form/todo-form.component';
@NgModule({
  declarations: [
    AppComponent,
    HeroCardComponent,
    TodoPageComponent,
    TodoListComponent,
    TodoListItemComponent,
    HeroPageComponent,
    TodoFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
