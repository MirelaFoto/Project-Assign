import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeroCardComponent } from 'src/app/components/hero-card/hero-card.component';
import { HttpClientModule } from '@angular/common/http';
import { HeroPageComponent } from 'src/app/views/hero-page/hero-page.component';
import { TodoPageComponent } from 'src/app/views/todo-page/todo-page.component';
import { TodoListComponent } from 'src/app/components/todo-list/todo-list.component';
import { TodoListItemComponent } from 'src/app/components/todo-list-item/todo-list-item.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TodoFormComponent } from 'src/app/components/todo-form/todo-form.component';
import { BghoverDirective } from './directives/bghover.directive';
import { ZoomDirective } from './directives/zoom.directive';

@NgModule({
  declarations: [
    AppComponent,
    HeroCardComponent,
    HeroPageComponent,
    TodoPageComponent,
    TodoListComponent,
    TodoListItemComponent,
    TodoFormComponent,
    BghoverDirective,
    ZoomDirective
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
