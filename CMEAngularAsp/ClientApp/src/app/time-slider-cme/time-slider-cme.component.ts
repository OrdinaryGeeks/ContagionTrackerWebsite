import { Component, OnInit, Output, EventEmitter } from '@angular/core';


import { Options, LabelType } from '@angular-slider/ngx-slider';


@Component({
  selector: 'app-time-slider-cme',
  templateUrl: './time-slider-cme.component.html',
  styleUrls: ['./time-slider-cme.component.css']
})
export class TimeSliderCMEComponent implements OnInit {
  value: number = 0;
  minValue: number = 0.00;
  maxValue: number = 24.00;
  optionsTime: Options = {

    showTicks: true,
    noSwitching: true,
    stepsArray: this.getRange().map((time: any) => {
      return { value: time };
    })
  };
  @Output() timeChangeEvent= new EventEmitter();
  onChange() {
    this.timeChangeEvent.emit(this.value);
    


  }
  //at https://stackoverflow.com/questions/43803661/how-to-set-time-in-rang-slider-in-angular-js
  getRange() {
    var arr = [];
    var d = new Date(2017, 1, 1);
    for (var i = 0; i < (48); i++) {
      d.setMinutes(d.getMinutes() + 30);
      arr.push(this.leadZero(d.getHours()) + '.' + this.leadZero(d.getMinutes()));
      console.log(this.leadZero(d.getHours()) + '.' + this.leadZero(d.getMinutes()));
    }
    return arr;
  }

  leadZero(time) {
    return time < 10 ? '0' + time : time;
  }
  constructor() { }

  ngOnInit(): void {
  }

}
