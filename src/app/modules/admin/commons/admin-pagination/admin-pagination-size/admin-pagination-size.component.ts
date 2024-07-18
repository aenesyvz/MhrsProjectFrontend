import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-admin-pagination-size',
  templateUrl: './admin-pagination-size.component.html',
  styleUrls: ['./admin-pagination-size.component.css']
})
export class AdminPaginationSizeComponent implements OnInit {
  @Input() pageSize: number = 0;
  @Output() changePageSize = new EventEmitter<number>();
  constructor() { }

  ngOnInit(): void {
  }

  handleChangePageSize() {
    this.changePageSize.emit(this.pageSize);
  }
}
