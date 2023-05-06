import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-form-array-crud',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './form-array-crud.component.html',
  styleUrls: ['./form-array-crud.component.scss']
})
export class FormArrayCRUDComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
