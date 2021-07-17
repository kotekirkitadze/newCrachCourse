import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Task } from '../../Task'
@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css'],
})
export class AddTaskComponent implements OnInit {
  @Output() onAddTask: EventEmitter<Task> = new EventEmitter();

  constructor() { }

  ngOnInit(): void { }

  onSubmit(myform: NgForm) {
    const task: Task = myform.value;
    if (!task.text) {
      alert("Please add a task");
      return;
    }

    const newTask: Task = {
      text: task.text,
      day: task.day,
      reminder: task.reminder
    }

    this.onAddTask.emit(newTask);
    myform.reset();


  }
}
