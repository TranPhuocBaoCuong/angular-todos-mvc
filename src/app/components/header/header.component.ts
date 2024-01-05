import { TodoService } from 'src/app/services/todo.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  constructor(private todoServive: TodoService) {}

  toggleAll() {
    this.todoServive.toggleAll();
  }
}
