import { Work } from './../models/work';
import { Injectable } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';

@Injectable({
  providedIn: 'root'
})
export class WorkService {

  constructor(
    private db: AngularFirestore
  ) { }


  getWork(workID){
    return this.db.collection("work").doc(workID).snapshotChanges();
  }


}
