import { Component } from '@angular/core';
import { CoursesService } from 'src/app/services/courses/courses.service';

// @component - is one of a decerator
@Component({ 
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent {
  title="List of courses";
  courses:string[];

  //  Dependency injection
  constructor(service : CoursesService) {
    this.courses = service.getCourses();
  }
}
