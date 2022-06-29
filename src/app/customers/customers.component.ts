import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css']
})
export class CustomersComponent implements OnInit {

  title: string = "";
  people: any[] = [];

  constructor() { }

  ngOnInit(): void {
    this.title = "Customers";
  }

}
