import {Component, Input} from '@angular/core';
import {TaskComponent} from "./task/task.component";

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [TaskComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})
export class TasksComponent {
  // @Input({ required: true}) name!: string;
  @Input({ required: true }) userId!: string;
  @Input({ required: true }) name!: string;
  tasks = [
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
      userId: 'u3',
      title: 'Prepare issue template',
      summary: 'Learning all the basic and advanced feature of Angular',
      dueDate: '2025-12-31',
    }
  ];

  get selectedUserTask() {
    return this.tasks.filter((task) => task.userId === this.userId);
  }
}
