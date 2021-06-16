import { Component, OnInit } from '@angular/core';

import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';

@Component({
  selector: 'app-critical-management-event',
  templateUrl: './critical-management-event.component.html',
  styleUrls: ['./critical-management-event.component.css']
})
export class CriticalManagementEventComponent implements OnInit {

  SendToApiString: string = "Select a date, format, person, and location to upload new information via API";
  chosenPlace: Places = { id: 0, lat: 0, long: 0, radius: 0, title: "" };
  chosenUser: User = { id: 0, firstName :"", lastName:"", phoneNumber:"" };
  sTADisabled: boolean = false;
  ToggleInputString: string;
  CheckInExposureString: string;
  checkInMode: boolean = false;
  public DDataExtra: string;
  inputMode: boolean = false;
  public UData: number;
  public showAllCAndE: boolean= false;
  public CData: number;
  public DData: string;
  public PData: number;
  places: Places[];
  exposures: Exposures[];
  exposedPlaces: Places[] = [];
  checkIns: CheckIn[];
  checkedInPlaces: Places[] = [];
  userCheckIns: CheckIn[] = [];
  userExposures: Exposures[];
  title: string = "";
  lat: number = 0;
  lng: number = 0;

  




  constructor(private http: HttpClient) {
}

  ngOnInit(): void {

    this.CheckInExposureString = "Check-in Mode";
    this.ToggleInputString = "Input Mode Off";
    this.DDataExtra = "No target date has been chosen";
    this.http.get<Places[]>('https://www.ordinarygeeks.com/cmedemo/api/places').subscribe(result => {
      this.places = result; this.http.get<Exposures[]>('https://www.ordinarygeeks.com/cmedemo/api/exposures').subscribe(resultS => {
        this.exposures = resultS; console.log(resultS); this.exposures.forEach(p => {
          console.log(p.beginTime); console.log(p.beginTime.toString()); this.places.forEach((d => ((d.id == p.placeID && this.DData == this.sqlToJsDate(p.beginTime.toString()).toLocaleDateString()) ? this.exposedPlaces.push(d) : false))) })

      }, error => console.error(error)); this.http.get<CheckIn[]>('https://www.ordinarygeeks.com/cmedemo/api/checkins').subscribe(resultC => {
        this.checkIns = resultC; console.log(resultC); this.checkIns.forEach(p => {
          console.log(p.beginTime); console.log("checkins"); console.log(p.beginTime.toString()); this.places.forEach((d => ((d.id == p.placeID && this.DData == this.sqlToJsDate(p.beginTime.toString()).toLocaleDateString()) ? this.checkedInPlaces.push(d) : false)))
        })
      }, error => console.error(error));
        })   , error => console.error(error);

    


    this.title = 'Nathaniel S (Alecto) of Ordinary Geeks (Contagion Tracker) Demo';
    this.lat = 34.9641091;
    this.lng = -90.0509327;
  }
  propagateExposures() {
    console.log("PPE");


    if (this.chosenUser.id != 0) {
      this.exposedPlaces = [];
      this.checkedInPlaces = [];
      this.userCheckIns = [];
      this.userExposures = [];
      this.exposures.forEach(p => {
        this.places.forEach((d => { if (d.id == p.placeID && p.userCMEID == this.chosenUser.id) this.exposedPlaces.push(d); })); if (p.userCMEID == this.chosenUser.id) this.userExposures.push(p); console.log(p);
      }, error => console.error(error));

      this.checkIns.forEach(p => {
        this.places.forEach((d => { if (d.id == p.placeID && p.userCMEID == this.chosenUser.id) this.checkedInPlaces.push(d); })); if (p.userCMEID == this.chosenUser.id) this.userCheckIns.push(p); console.log(p);
      }, error => console.error(error));
    
      console.log(this.userCheckIns);
      console.log(this.userExposures);

      this.userCheckIns.sort((a, b) => this.sqlToJsDate(a.beginTime) < this.sqlToJsDate(b.beginTime) ? -1 : 1);
      this.userExposures.sort((a, b) => this.sqlToJsDate(a.beginTime) < this.sqlToJsDate(b.beginTime) ? -1 : 1);

      console.log(this.userCheckIns);
      console.log("exposures");
      console.log(this.userExposures);

      console.log("done sorting");
      const headers = { 'content-type': 'application/json' }
      //if behind the earliest
      console.log(this.userExposures[0].beginTime);

      this.userCheckIns.forEach(p => {
        if (this.sqlToJsDate(this.userExposures[0].beginTime) < this.sqlToJsDate(p.beginTime)) {
          console.log("About ot try to posst");
          let j: Exposures = {
            beginTime: p.beginTime, endTime: p.endTime, placeID: p.placeID, userCMEID: p.userCMEID
          };
          console.log(j);

          this.sendPostRequest(j).subscribe(res => { console.log(res) });
        }
      });




    }
  }

  markerClicked(marker) {
    alert(marker);
  }


  
  sendPostRequest(data: Exposures): Observable<Exposures> {
    this.exposures.push(data);
    return this.http.post<Exposures>("https://www.ordinarygeeks.com/CMEDemo/api/Exposures", data);
  }


  sendPostRequestC(data: CheckIn): Observable<CheckIn> {
    this.checkIns.push(data);
    return this.http.post<CheckIn>("https://www.ordinarygeeks.com/CMEDemo/api/CheckIns", data);
  }
  showEverything(event) {
    this.exposedPlaces = [];
    this.checkedInPlaces = [];
    
    this.showAllCAndE = event;
    console.log(event);
    if (event) {
      if (this.chosenUser.id == 0) {
        this.exposures.forEach(p => {
          this.places.forEach(d => { if (d.id == p.placeID) this.exposedPlaces.push(d) })
        }, error => console.error(error));
        this.checkIns.forEach(p => {
          this.places.forEach(d => { if (d.id == p.placeID ) this.checkedInPlaces.push(d) })
        }, error => console.error(error));
      }
      else {
        this.exposures.forEach(p => {
          this.places.forEach(d => { if (d.id == p.placeID && p.userCMEID == this.chosenUser.id) this.exposedPlaces.push(d) })
        }, error => console.error(error));
        this.checkIns.forEach(p => {
          this.places.forEach(d => { if (d.id == p.placeID && p.userCMEID == this.chosenUser.id) this.checkedInPlaces.push(d) })
        }, error => console.error(error));
      }
    }
    
  }

  changePlace(event) {

    if (event != 0) {
      this.chosenPlace = event;
     // alert(event);
    }



  }
  changeUser(event) {

    
    this.userCheckIns = [];
    this.userExposures = [];
    this.exposedPlaces = [];
    this.checkedInPlaces = [];
    if (event.id != 0) {
      this.chosenUser = event;
     // event = this.chosenUser.id;
      //this.UData = this.chosenUser.id;
      if (this.showAllCAndE) {
        this.exposures.forEach(p => {
          this.places.forEach((d => { if (d.id == p.placeID && p.userCMEID == event) this.exposedPlaces.push(d); })); if (p.userCMEID == event) this.userExposures.push(p); console.log(p);
        }, error => console.error(error));

        this.checkIns.forEach(p => {
          this.places.forEach((d => { if (d.id == p.placeID && p.userCMEID == event) this.checkedInPlaces.push(d); })); if (p.userCMEID == event) this.userCheckIns.push(p); console.log(p);
        }, error => console.error(error));
      }
      else {
        this.exposures.forEach(p => {
          this.places.forEach((d => { if (d.id == p.placeID && p.userCMEID == event && this.DData == this.sqlToJsDate(p.beginTime.toString()).toLocaleDateString()) this.exposedPlaces.push(d); })); if (p.userCMEID == event) this.userExposures.push(p); console.log(p);
        }, error => console.error(error));
        this.checkIns.forEach(p => {
          this.places.forEach((d => { if (d.id == p.placeID && p.userCMEID == event && this.DData == this.sqlToJsDate(p.beginTime.toString()).toLocaleDateString()) this.checkedInPlaces.push(d); })); if (p.userCMEID == event) this.userCheckIns.push(p); console.log(p);
        }, error => console.error(error));
      }
    }
    else {
      this.chosenUser = event;
      this.exposures.forEach(p => {
        this.places.forEach((d => { if (d.id == p.placeID && this.DData == this.sqlToJsDate(p.beginTime.toString()).toLocaleDateString()) this.exposedPlaces.push(d); }));
      }, error => console.error(error));
      this.checkIns.forEach(p => {
        this.places.forEach((d => { if (d.id == p.placeID && this.DData == this.sqlToJsDate(p.beginTime.toString()).toLocaleDateString()) this.checkedInPlaces.push(d); }))
      }, error => console.error(error));
    }


  }

  changeDate(event) {

    this.showAllCAndE = false;
    this.DData = event;
    this.DDataExtra = " is the targeted date";
    if (this.inputMode) {
      console.log("changing date" + this.showAllCAndE + " " + this.DData + " " + this.inputMode);
     // alert("Changing date api calls");
    this.exposedPlaces = [];
    this.checkedInPlaces = [];
   
    
      if (this.chosenUser.id == 0) {
        this.exposures.forEach(p => {
          this.places.forEach((d => { if (d.id == p.placeID && this.DData == this.sqlToJsDate(p.beginTime.toString()).toLocaleDateString()) this.exposedPlaces.push(d); }));
        }, error => console.error(error));


        this.checkIns.forEach(p => {
          this.places.forEach((d => { if (d.id == p.placeID && this.DData == this.sqlToJsDate(p.beginTime.toString()).toLocaleDateString()) this.checkedInPlaces.push(d); }))
        }, error => console.error(error));
      }
      else {

        this.exposures.forEach(p => {
          this.places.forEach((d => { if (d.id == p.placeID && p.userCMEID == this.chosenUser.id && this.DData == this.sqlToJsDate(p.beginTime.toString()).toLocaleDateString()) this.exposedPlaces.push(d); }));
        }, error => console.error(error));


        this.checkIns.forEach(p => {
          this.places.forEach((d => { if (d.id == p.placeID && p.userCMEID == this.chosenUser.id && this.DData == this.sqlToJsDate(p.beginTime.toString()).toLocaleDateString()) this.checkedInPlaces.push(d); }))
        }, error => console.error(error));

      }
    }
    console.log(this.checkIns);
    console.log(this.exposures);
  }

  checkInToggle() {
    this.checkInMode = !this.checkInMode;
    if (this.checkInMode) {
      this.CheckInExposureString = "Check In Mode";
    }
      else
      this.CheckInExposureString = "Exposure Mode";
    
  }
  sendToApi() {

    this.sTADisabled = true;

    if (this.inputMode && this.checkInMode) {
      console.log("about to make checkin");
      console.log(this.DData);
      console.log(this.chosenPlace.id);
      let newCheckIn: CheckIn = { userCMEID: this.chosenUser.id, beginTime: new Date(this.DData), endTime: new Date(this.DData), placeID: this.chosenPlace.id };
      console.log(newCheckIn);
      console.log("new checkin");
      this.sendPostRequestC(newCheckIn).subscribe(p => { this.sTADisabled = false; this.SendToApiString = "Select a date, format, person, and location to upload new information" });
      
    }

    if (this.inputMode && !this.checkInMode) {
      console.log("About to make exposure");
      let newExposure: Exposures = { placeID: this.chosenPlace.id, userCMEID: this.chosenUser.id, beginTime: new Date(this.DData), endTime: new Date(this.DData) };
      console.log(newExposure);
      this.sendPostRequest(newExposure).subscribe(p => { this.sTADisabled = false; this.SendToApiString = "Select a time, format, person, and location to upload new information"; });


    }




  }
  toggleInput() {

    this.inputMode = !this.inputMode;

    if (this.inputMode) {
      this.ToggleInputString = "Input Mode Activated";

    }
    else
      this.ToggleInputString = "Input Mode Deactivated";
  }

  onClickMarker() {

    if (this.inputMode) {



    }
  }
  //https://deepinthecode.com/2014/08/05/converting-a-sql-datetime-to-a-javascript-date/
 sqlToJsDate(sqlDate) {
  //sqlDate in SQL DATETIME format ("yyyy-mm-dd hh:mm:ss.ms")
  // console.log('sqltojs');
  // console.log(sqlDate);

   
   var sqlDateArr1 = sqlDate.split("-");

   if (sqlDateArr1.length > 1) {
     //format of sqlDateArr1[] = ['yyyy','mm','dd hh:mm:ms']
     var sYear = sqlDateArr1[0];
     // console.log(sYear);
     var sMonth = (Number(sqlDateArr1[1]) - 1);
     // console.log(sMonth);
     var sqlDateArr2 = sqlDateArr1[2].split("T");

     //format of sqlDateArr2[] = ['dd', 'hh:mm:ss.ms']
     var sDay = sqlDateArr2[0];
     // console.log(sDay);
     var sqlDateArr3 = sqlDateArr2[1].split(":");
     // console.log(sqlDateArr3);
     //format of sqlDateArr3[] = ['hh','mm','ss.ms']
     var sHour = sqlDateArr3[0];
     // console.log(sHour);
     var sMinute = sqlDateArr3[1];
     //console.log(sMinute);
     var sqlDateArr4 = sqlDateArr3[2].split(".");

     //format of sqlDateArr4[] = ['ss','ms']
     var sSecond = sqlDateArr4[0];
     var sMillisecond = sqlDateArr4[1];
     //console.log(sSecond);
     //console.log(sMillisecond);

     let newDate = new Date(sYear, sMonth, sDay, sHour, sMinute, sSecond, 0);
     console.log(newDate);
     return newDate;
   }
   return sqlDate;
  
}

}
interface User {
  id: number;
  firstName: string;
  lastName: string;
  phoneNumber: string;

}
interface CheckIn {

  beginTime: Date;
  endTime: Date;
  placeID: number;
  userCMEID: number;
}
interface Exposures {

  beginTime: Date;
  endTime: Date;
  placeID: number;
  userCMEID: number;

  
}

interface  Places{

  id: number;
  lat: number;
  long: number;
  radius: number;
  title: string;

}
