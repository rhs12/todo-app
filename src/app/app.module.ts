import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { TodoListHeaderComponent } from './todo-list-header/todo-list-header.component';
import { HttpModule } from '@angular/http';
import { TodoListComponent } from './todo-list/todo-list.component';
import { TodoListItemComponent } from './todo-list-item/todo-list-item.component';
import { TodoListFooterComponent } from './todo-list-footer/todo-list-footer.component';
import { TodoDataService } from './todo-data.service';
import { ApiService } from './api.service';
import { AppRoutingModule } from './app-routing.module';
import { TodosComponent } from './todos/todos.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SessionService } from './session.service';
import { AuthService } from './auth.service';

@NgModule({
  declarations: [
    AppComponent,
    TodoListComponent,
    TodoListFooterComponent,
    TodoListHeaderComponent,
    TodoListItemComponent,
    SignInComponent,
    TodosComponent,
    TodoListItemComponent,
    PageNotFoundComponent,
    TodosComponent
  ],
  imports: [
    AppRoutingModule,
    FormsModule,
    BrowserModule,
    HttpModule,
    ReactiveFormsModule
  ],
  providers: [ApiService,
    AuthService,
    SessionService,
    TodoDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
