import { type NewTaskData} from "./task/task.model";
import {Injectable} from "@angular/core";

@Injectable({ providedIn: "root" })
export class TasksService {
  private tasks = [
    {
      id: 't1',
      userId: 'u1',
      title: 'Learning Angular',
      summary: 'Learning all the basic and advanced feature of Angular',
      dueDate: '2025-12-31',
    },
    {
      id: 't2',
      userId: 'u2',
      title: 'Building First Angular',
      summary: 'Build a first prototy of the online shop website',
      dueDate: '2025-12-31',
    },
    {
      id: 't3',
      userId: 'u1',
      title: 'Prepare issue template',
      summary: 'Learning all the basic and advanced feature of Angular',
      dueDate: '2025-12-31',
    }
  ];

  constructor() {
    const tasks = localStorage.getItem('tasks');

    if(tasks) {
      this.tasks = JSON.parse(tasks);
    }
  }

  getUserTasks(userId: string) {
    return this.tasks.filter((task) => task.userId === userId);
  }

  addTask(taskData: NewTaskData, userId: string) {
    this.tasks.unshift({
      id: new Date().getTime().toString(),
      userId: userId,
      title: taskData.title,
      summary: taskData.summary,
      dueDate: taskData.date
    });
    this.saveTasks();
  }

  removeTask(id: string) {
    this.tasks = this.tasks.filter((task) => task.id !== id);
    this.saveTasks();
  }

  private saveTasks() {
    localStorage.setItem('tasks', JSON.stringify(this.tasks));
  }
}
