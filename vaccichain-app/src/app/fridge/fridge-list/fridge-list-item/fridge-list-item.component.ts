import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-fridge-list-item',
  templateUrl: './fridge-list-item.component.html',
  styleUrls: ['./fridge-list-item.component.css']
})
export class FridgeListItemComponent implements OnInit {

  @Input() fridge: number;  

  constructor() { }

  ngOnInit() {
  }

}
