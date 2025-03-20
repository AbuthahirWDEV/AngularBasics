import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CourseComponent } from './components/course/course.component';
import { CoursesService } from './services/courses/courses.service';
import { GreetingComponent } from './components/greeting/greeting.component';
import { CounterComponent } from './components/counter/counter.component';
import { TodosComponent } from './todos/todos.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { provideHttpClient } from'@angular/common/http';
import { TodoItemComponent } from './components/todo-item/todo-item.component';
import { HighlightCompletedTodoDirective } from './directives/highlight-completed-todo.directive';
import { FilterTodosPipe } from './pipes/filter-todos.pipe';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    CourseComponent,
    GreetingComponent,
    CounterComponent,
    HomeComponent,
    HeaderComponent,
    TodoItemComponent,
    TodosComponent,
    HighlightCompletedTodoDirective,
    FilterTodosPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    // Your services here
    CoursesService,
    provideHttpClient()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
