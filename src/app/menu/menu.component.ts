import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  menuItems: Array<{path: string, label: string}> = [
    {
        path: '/', 
        label: 'Home'
    },
    {
      path: '/categories', 
      label: 'Categories'
    },
    {
      path: '/suppliers', 
      label: 'Suppliers'
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
