import { Component, OnInit, Output, EventEmitter} from '@angular/core';

import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-user-drop-down',
  templateUrl: './user-drop-down.component.html',
  styleUrls: ['./user-drop-down.component.css']
})
export class UserDropDownComponent implements OnInit {

  constructor(private http:HttpClient) { }
  users: User[] = [];
  p: User;
  ngOnInit(): void {

    this.http.get<User[]>('https://www.ordinarygeeks.com/cmedemo/api/usercmes').subscribe(result => { this.users = result; console.log(result);}, error => console.error(error));
  }

  @Output() dropDownSelection = new EventEmitter();
  onSelect(id) {
    console.log('onselectevent');
   // console.log(event.currentTarget.options[event.currentTarget.options.selectedIndex].id);
    //let id = event.currentTarget.options[event.currentTarget.options.selectedIndex].id;
    console.log(id);
    if (id == 0) {

      this.p = { firstName:'', lastName: '', id: 0, phoneNumber: '' };
      this.dropDownSelection.emit(this.p);

    }
    else
   this.dropDownSelection.emit(this.users[id-1]);

  }


}
  interface User {
    id: number;
    firstName: string;
    lastName: string;
    phoneNumber: string;

}
