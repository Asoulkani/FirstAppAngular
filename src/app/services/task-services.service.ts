import { Injectable, EventEmitter } from '@angular/core';
import { Task } from '../Models/Task.model';
import { Categorie } from '../Models/Categorie.model';

@Injectable({
  providedIn: 'root'
})
export class TaskServicesService {

  private tasks: Task[] = [];
  taskEmmitter = new EventEmitter<Task>();

  constructor() { }


  insertTask(task: Task) {
    this.tasks.push(task);
  }


  getTask(indexOfTask: number) {
    return this.tasks[indexOfTask];
  }


  getTasks() {
    return this.tasks;
  }


  changeTaskStatus(index: number, newStatus: number) {
    this.getTask(index).changeTaskStatus(newStatus);
  }


  setDetails(task: Task) {
    const newTask: Task = task.getNewInstance();
    this.taskEmmitter.emit(newTask);
  }

  updateTask(index: number) {
    const task: Task = this.tasks[index];
    this.taskEmmitter.emit(task);
  }

  deleteTask(index: number) {
    this.tasks.splice(index,1);
  }


}
