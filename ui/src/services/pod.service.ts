import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Pod } from 'src/app/models/pod';

@Injectable({
  providedIn: 'root'
})
export class PodService {
  constructor(private readonly angularFireStore: AngularFirestore) {}

  public async create(pod: Pod) {
    await this.angularFireStore.collection('pods').add(pod);
  }
}
