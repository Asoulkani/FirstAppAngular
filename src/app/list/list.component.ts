import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Task } from '../Models/Task.model';
import { TaskServicesService } from '../services/task-services.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent implements OnInit {

  tasks: Task[] = [];


  constructor(private taskService: TaskServicesService) {
    this.tasks = this.taskService.getTasks();
  }

  takeAction(ind: number, sta: number) {
    this.taskService.changeTaskStatus(ind, sta);
  }

  showDetails(task: Task) {
    this.taskService.setDetails(task);
  }

  updateTask(index: number) {
    this.taskService.updateTask(index);
  }

  ngOnInit() {
  }


  deleteTask(index: number) {
    this.taskService.deleteTask(index);
  }

}

