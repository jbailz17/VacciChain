import { Component, OnInit, Input } from '@angular/core';

import { Batch } from '../../../batch.model';

@Component({
  selector: 'app-batch-list-item',
  templateUrl: './batch-list-item.component.html',
  styleUrls: ['./batch-list-item.component.css']
})
export class BatchListItemComponent implements OnInit {

  @Input() batch: number;

  constructor() { }

  ngOnInit() {
  }

}
