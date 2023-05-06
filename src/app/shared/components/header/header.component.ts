import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from 'src/app/app-routing.module';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule,AppRoutingModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  headerMenus = [
    {
      label: 'FormArray',
      routerLink: 'form-array',
    },
    // {
    //   label :'',
    //   routerLink : ''
    // },
    // {
    //   label :'',
    //   routerLink : ''
    // },
  ];
}
