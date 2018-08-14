import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private _http: HttpClient) {
   }

getTasks() {
  return this._http.get('/tasks');
}
addTask(newtask) {
  return this._http.post('/tasks/new', newtask);
}
editTask(id, task) {
  return this._http.put(`/tasks/${id}`, task);
}
removeTask(id) {
  return this._http.delete(`/tasks/remove/${id}`);
}
}

