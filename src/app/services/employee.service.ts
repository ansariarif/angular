import { Injectable } from '@angular/core';
import { Employee } from '../models/employee.model';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  employees: Employee[] = [
    {
      id: 1,
      name: "emolpyee1",
      email: "employee1@34gmsil.com",
      phone: 2222
    },
    {
      id: 2,
      name: "emolpyee2",
      email: "employee2@322gmsil.com",
      phone: 3333
    }
    
  ]; 

  constructor() { }

  onGet(){
    return this.employees;
  }

  onGetEmployee(id:number){
    return this.employees.find(x=>x.id === id);
  }

  onAdd(employee: Employee){
    this.employees.push(employee);
  }

  onDelete(id:number){
    let employee = this.employees.find(x=>x.id === id);
    let index = this.employees.indexOf(employee,0);
    this.employees.splice(index,1);
  }

  onUpdate(employee : Employee){
    let oldEmployee = this.employees.find(x=>x.id === employee.id);
    oldEmployee.name = employee.name;
    oldEmployee.email = employee.email;
    oldEmployee.phone = employee.phone;
  }
}
