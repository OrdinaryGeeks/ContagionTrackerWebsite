import { Component, OnInit, Output, EventEmitter, Input} from '@angular/core';

@Component({
  selector: 'app-show-all-check-button',
  templateUrl: './show-all-check-button.component.html',
  styleUrls: ['./show-all-check-button.component.css']
})
export class ShowAllCheckButtonComponent implements OnInit {
   @Input() showEveryExposureAndCheckIn: boolean = false;
  constructor() { }

  @Output() showAllCAndE = new EventEmitter<boolean>();

  onChange() {

    this.showEveryExposureAndCheckIn = !this.showEveryExposureAndCheckIn;
    console.log(this.showEveryExposureAndCheckIn);
    this.showAllCAndE.emit(this.showEveryExposureAndCheckIn);
  }
  ngOnInit(): void {
  }

}
