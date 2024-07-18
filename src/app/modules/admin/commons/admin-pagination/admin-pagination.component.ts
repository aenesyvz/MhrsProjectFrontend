import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-admin-pagination',
  templateUrl: './admin-pagination.component.html',
  styleUrls: ['./admin-pagination.component.css']
})
export class AdminPaginationComponent implements OnInit {
  @Input() pageIndex: number;
  @Output() pageIndexChange = new EventEmitter<number>();
  @Input() hasPrevious?: boolean;
  @Input() hasNext?: boolean;

  @Output() changePage = new EventEmitter<void>();

  constructor() { }

  ngOnInit(): void {
  }

  incrementPageIndex() {
    if (this.hasNext) {
      this.pageIndex++;
      this.pageIndexChange.emit(this.pageIndex);
    }

  }

  decrementPageIndex() {
    if (this.hasPrevious) {
      this.pageIndex--;
      this.pageIndexChange.emit(this.pageIndex);
    }
  }
}
