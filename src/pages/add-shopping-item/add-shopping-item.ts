import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {Item} from './../../models/item.model'
import {ShoppingListService} from "../../services/shopping-list/shopping-list.service";
import {ToastService} from "../../toast/toast.service";

/**
 * Generated class for the AddShoppingItemPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-add-shopping-item',
  templateUrl: 'add-shopping-item.html',
})
export class AddShoppingItemPage {

  item: Item = {
    name: "",
    quantity: undefined,
    price: undefined
  }

  constructor(public navCtrl: NavController, public navParams: NavParams, public shopping: ShoppingListService, public toast:ToastService) {}



  ionViewDidLoad() {
    console.log('ionViewDidLoad AddShoppingItemPage');
  }

  addItem(item:Item){
       this.shopping.addItem(item).then(ref => {
         this.toast.show(`${item.name} added!`);

         this.navCtrl.setRoot('HomePage', {key: ref.key})

       })
  }
}
