import { Component, OnInit, Output, EventEmitter } from '@angular/core';

import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-place-dropdown',
  templateUrl: './place-dropdown.component.html',
  styleUrls: ['./place-dropdown.component.css']
})
export class PlaceDropdownComponent implements OnInit {

  constructor(private http:HttpClient) { }
  places: Place[] = [];
  ngOnInit(): void {
    this.http.get<Place[]>('https://www.ordinarygeeks.com/cmedemo/api/places').subscribe(result => { this.places = result; console.log(result); }, error => console.error(error));

  }


  @Output() dropDownSelectPlace = new EventEmitter();
  onSelect2(id) {
   console.log('onselectevent');
    // console.log(event.currentTarget.options[event.currentTarget.options.selectedIndex].id);
    //let id = event.currentTarget.options[event.currentTarget.options.selectedIndex].id;
    console.log(id);
    this.dropDownSelectPlace.emit(this.places[id-1]);

  }

}
interface Place {
  id: number;
  lat: number;
  long: number;
  title: string;
  radius: number;
}
