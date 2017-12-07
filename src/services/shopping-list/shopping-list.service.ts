import {Item} from "./../../models/item.model";

import {Injectable} from "@angular/core";
import {AngularFireDatabase} from 'angularfire2/database';


@Injectable()
export class ShoppingListService {

    public shoppingListRef = this.db.list<Item>('shopping-list');

    constructor(public db: AngularFireDatabase) {}
            getShoppingList() {
                return this.shoppingListRef;

            }
        addItem(item: Item){
            return this.shoppingListRef.push(item);
        }

      editItem(item: Item){
          return this.shoppingListRef.update(item.key, item);
      }

      removeItem(item: Item){
          return this.shoppingListRef.remove(item.key);
      }
}
