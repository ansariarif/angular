import { Component, OnInit } from '@angular/core';
import { Employee } from '../models/employee.model';
import { EmployeeService } from '../services/employee.service';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent implements OnInit {
  employees: Employee[] = [];
  constructor(private emoplyeeService:EmployeeService) { }

  ngOnInit(): void {
    this.employees=this.emoplyeeService.onGet();
  }

  onDelete(id:number){
    this.emoplyeeService.onDelete(id);
  }

}
