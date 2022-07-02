import { Component, Input, OnInit } from '@angular/core';
import { ICustomer } from 'src/app/shared/interfaces';

@Component({
  selector: 'app-customers-list',
  templateUrl: './customers-list.component.html',
  styleUrls: ['./customers-list.component.css']
})
export class CustomersListComponent implements OnInit {

  private _customers: ICustomer[] = []
  //Input Decorator can be put on either set or get
  @Input() get customers(): ICustomer[] {
      return this._customers;
  }

  set customers(value: ICustomer[]) {
    if(value) {
      this.filteredCustomers = this._customers = value;
      this.calculateOrders();
    }
  }

  filteredCustomers: ICustomer[] = []
  customersOrderTotal: number = 0
  currencyCode: string = 'USD'

  constructor() { }

  // ngOnChanges(changes: SimpleChanges) {

  // }

  ngOnInit(): void {
  
  }

  calculateOrders(): void {
    this.customersOrderTotal = 0;
    this.filteredCustomers.forEach((cust: ICustomer) => {
      this.customersOrderTotal += cust.orderTotal;
    })
  }

  //sort the filtered customers
  sort(prop: string): void {
    const mn = prop;
  }

}
