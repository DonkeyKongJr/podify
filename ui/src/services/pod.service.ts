import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Pod } from 'src/app/models/pod';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class PodService {
  constructor(private readonly angularFireStore: AngularFirestore) {}

  public async create(pod: Pod) {
    await this.angularFireStore.collection('pods').add(pod);
  }

  public get(userId: string): Observable<Pod[]> {
    // const collection = this.angularFireStore.collection<Pod>('pods', ref =>
    //   ref.where('creator', '==', userId)
    // );
    const collection = this.angularFireStore.collection<Pod>('pods');
    return collection.valueChanges();
  }
}
