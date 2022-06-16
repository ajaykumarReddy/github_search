import { Component, Input, OnInit } from '@angular/core';
import { User } from '../utilities/type';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {

  items: User[] = [];

  @Input() data: User[] = [];

  @Input() totalPages!: number;

  @Input() initialPage = 1;

  @Input() pageSize = 10;

  nextDisable = false;

  previousDisable = false;



  constructor() { }

  ngOnInit() {
    this.items = this.data?.slice(this.initialPage, this.pageSize)
  }

  next() {
     this.initialPage = this.initialPage + 1;
     this.nextDisable = (this.initialPage * this.pageSize) >= this.data.length;
     this.items = this.data?.slice((this.initialPage - 1) * this.pageSize, this.initialPage * this.pageSize)
  }

  previous(){
    this.initialPage = this.initialPage - 1;
    this.previousDisable = this.initialPage === 0;
    this.items = this.data?.slice(this.initialPage, this.pageSize)
  }

}
