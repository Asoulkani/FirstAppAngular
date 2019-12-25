import { Component } from '@angular/core';
import { TaskServicesService } from './services/task-services.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [TaskServicesService],
})
export class AppComponent {
  title = 'ToDoList';
}
