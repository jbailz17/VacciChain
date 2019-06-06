import { Component, OnInit, OnChanges, Input } from '@angular/core';
import * as CanvasJs  from '../../../../../../canvasjs-2.3.1/canvasjs.min';

import { ContractService } from '../../../../shared/Services/contract.service';

@Component({
  selector: 'app-batch-chart',
  templateUrl: './batch-chart.component.html',
  styleUrls: ['./batch-chart.component.css']
})
export class BatchChartComponent implements OnInit, OnChanges {

  @Input() fridgeID: number;
	tempHistory: number[] = [];

  constructor(private _contractService: ContractService) { }

  async ngOnInit() {

		console.log('I was called');

    if (this.fridgeID == null) {
      return;
    }
    
		await this._contractService.retrieveTempHistory(this.fridgeID).then((res) => {
			this.tempHistory = res.map(el => {
				return el[0];
			});
		});

		console.log("Temp History: ", this.tempHistory);

    let dataPoints = [];
		let y = 0;		
		this.tempHistory.forEach((el, index) => {
			dataPoints.push({x: index, y: el});
		});
		
		console.log("Data Points: ", dataPoints);
    
	  let chart = new CanvasJs.Chart("chartContainer", {
		  animationEnabled: true,
			exportEnabled: true,
			theme: "light2",
		  title: {
			  text: "Fridge History"
			},
			axisX: {
				interval: 1
			},
			axisY: {
				title: "Temperature"
			},
		  data: [
		  {
			  type: "line",                
			  dataPoints: dataPoints
		  }]
	  });
		
	  chart.render();

  }

  ngOnChanges() {
		this.ngOnInit();
	}

}
