import { AlertLogoutProvider } from './../../providers/alert-logout/alert-logout';
import { Component, OnInit } from '@angular/core';
import { WorkService } from 'src/app/services/work.service';

@Component({
  selector: 'app-work',
  templateUrl: './work.page.html',
  styleUrls: ['./work.page.scss'],
})

export class WorkPage implements OnInit {

  beaconNumber: number;
  work: any;

  constructor(
    private logout: AlertLogoutProvider,
    private firebaseService: WorkService
  ) { }


  ngOnInit() {
       this.radonBeacon()
  }

  closeApp() {
    this.logout.presentAlertConfirm();
  }

  radonBeacon() {
    this.beaconNumber = Math.floor(Math.random() * 10 + 1)
    let idbeacon: string = this.beaconNumber + '';
    this.getWork(idbeacon)
  }


  getWork(id) {
    this.firebaseService.getWork(id).subscribe(
      data=>{
         this.work = data;
         console.log(this.work);
      }
    )
    
  }


}
