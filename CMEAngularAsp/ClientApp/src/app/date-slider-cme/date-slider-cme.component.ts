import { Component, EventEmitter, OnInit, Output } from '@angular/core';


import { Options, LabelType } from '@angular-slider/ngx-slider';

@Component({
  selector: 'app-date-slider-cme',
  templateUrl: './date-slider-cme.component.html',
  styleUrls: ['./date-slider-cme.component.css']
})
export class DateSliderCMEComponent implements OnInit {

  dateRange: Date[] = this.customDateRange();
 value: number = this.dateRange[0].getTime();

  title: string = "";
  lat: number = 0;
  lng: number = 0;

  //https://www.positronx.io/angular-drag-range-slider-with-ngx-slider-tutorial/
  optionsDate: Options = {
    stepsArray: this.dateRange.map((date: Date) => {
      return { value: date.getTime() };
    }),
    translate: (value: number, label: LabelType): string => {
      return new Date(value).toDateString();
    }
  };

  constructor() { }

  ngOnInit(): void {
  }
  customDateRange(): Date[] {
    const dates: Date[] = [];
    var d = new Date();
    dates.push(new Date(d));
    for (let i: number = 1; i <= 31; i++) {

     
      //d.setDate(d.getDate() + 5);
      var n = new Date(d.setDate(d.getDate() - 1));
      dates.push(n);
    }
    return dates;
  }

  @Output() dateChangeEvent = new EventEmitter<string>();
  onChange(value) {
    this.dateChangeEvent.emit(new Date(value).toLocaleDateString());
  }

}
