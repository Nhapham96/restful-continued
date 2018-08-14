import { Component, OnInit } from '@angular/core';
import { HttpService } from './http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  title = 'Restful Tasks API';
  tasks: any;
  showing: any;
  showAll: any;
  newTask: any;
  editing: any;
  Task: any;
  showTask(obj: object): void  {
    console.log(`Click event is working with task id: ${obj}`);
    this.showing = obj;
    }
  editTask(id: string): void  {
    console.log(`Click event is working with task id: ${id}`);
    this.editing = id;
    }
  removeTask(id: string): void  {
    console.log(id);
    console.log(`Click event is working with task id: ${id}`);
    const observable = this._httpService.removeTask(id);
    observable.subscribe(data => {
    });
    this.getTasksFromService();
    }
  constructor(private _httpService: HttpService) { }
  ngOnInit() {
    this.newTask = { title: '', discriptions: '' };
    this.Task = { title: '', discriptions: '' };
  }
  onSubmit(id) {
    console.log(this.Task);
    const observable = this._httpService.editTask(id, this.Task);
    observable.subscribe(data => {
      // this.newTask = { title: '', description: '' };
    });
    this.getTasksFromService();
  }
  onUpdate(id) {
    console.log(id);
    console.log(this.Task);
    const observable = this._httpService.editTask(id, this.Task);
    observable.subscribe(data => {
    });
    this.editing = '',
    this.getTasksFromService();
  }
  onshowAll() {
    console.log('showing all');
   this.getTasksFromService();
  }
  getTasksFromService() {
    const observable = this._httpService.getTasks();
    observable.subscribe(data => {
       console.log('Got our tasks!', data);
       this.tasks = data;
       this.showAll = true;
    });
 }
}
