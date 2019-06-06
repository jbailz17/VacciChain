import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-vial-list-item',
  templateUrl: './vial-list-item.component.html',
  styleUrls: ['./vial-list-item.component.css']
})
export class VialListItemComponent implements OnInit {

  @Input() batch: number;
  @Input() vial: number;

  constructor() { }

  ngOnInit() {
  }

}
