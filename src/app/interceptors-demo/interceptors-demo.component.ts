import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-interceptors-demo',
  standalone: true,
  imports: [],
  templateUrl: './interceptors-demo.component.html',
  styleUrl: './interceptors-demo.component.scss'
})
export class InterceptorsDemoComponent implements OnInit {
  constructor(private http: HttpClient) {
  }
  data: any;

  ngOnInit() {
    this.http.get('https://jsonplaceholder.typicode.com/todos/1').subscribe(
      (res) => {
        this.data = JSON.stringify(res);
      }
    )
  }

}
