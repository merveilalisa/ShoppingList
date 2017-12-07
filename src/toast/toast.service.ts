

import {Injectable} from "@angular/core";
import {ToastController} from "ionic-angular/index";

@Injectable()
export class ToastService {
    constructor(public toastCtrl: ToastController){}

        show(message: string, duration: number = 3000){
            return this.toastCtrl
                .create({
                    message,
                    duration
                })
                .present();

    }
}