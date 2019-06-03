import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IBeacon } from '@ionic-native/ibeacon/ngx';


@Component({
  selector: 'app-search',
  templateUrl: './search.page.html',
  styleUrls: ['./search.page.scss'],
})
export class SearchPage implements OnInit {

  constructor(
    private router: Router,
    private ibeacon: IBeacon
  ) { }

  ngOnInit() {
  }

  search() {
    this.router.navigateByUrl('/work')

  }

  getAuthorization(){

    // Request permission to use location on iOS
    this.ibeacon.requestAlwaysAuthorization();
  }

  searchBeacon(){
    // create a new delegate and register it with the native layer
    let delegate = this.ibeacon.Delegate();
    // Subscribe to some of the delegate's event handlers
    delegate.didRangeBeaconsInRegion()
      .subscribe(
        data => console.log('didRangeBeaconsInRegion: ', data),
        error => console.error()
      );
    delegate.didStartMonitoringForRegion()
      .subscribe(
        data => console.log('didStartMonitoringForRegion: ', data),
        error => console.error()
      );
    delegate.didEnterRegion()
      .subscribe(
        data => {
          console.log('didEnterRegion: ', data);
        }
      );
    
    let beaconRegion = this.ibeacon.BeaconRegion('deskBeacon', '003e8c80-ea01-4ebb-b888-78da19df9e55');
    
    this.ibeacon.startMonitoringForRegion(beaconRegion)
      .then(
        () => console.log('Native layer received the request to monitoring'),
        error => console.error('Native layer failed to begin monitoring: ', error)
      );
    }
  }


