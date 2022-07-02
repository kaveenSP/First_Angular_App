export interface ICustomer {
    //id?: number means this field is optional
    id: number;
    name: string;
    city: string;
    orderTotal: number;
    customerSince: any;
}

export interface IOrder {
    customerId: number;
    orderItems: IOrderItem[];
}

export interface IOrderItem {
    id: number;
    productName: string;
    itemCost: number;
}