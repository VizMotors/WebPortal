import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { FeedItem } from '../models/feedItem';

@Injectable({
  providedIn: 'root'
})
export class ItemsService {

  constructor(private db: AngularFireDatabase) { }

  // getItems(){
  //   this.db.list('/feeditem').snapshotChanges().subscribe(
  //     res=>{
  //      res.map(item=>{
  //         const payload = item.payload.val;
  //         const key = item.key
  //         return <any>{ key};
  //       })
  
        
  //     }
  //   );
  // }


  saveItem(item: FeedItem){
    this.db.list('/feedItem').push(item)
  }
}
