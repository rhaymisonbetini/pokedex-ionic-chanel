import { Injectable } from '@angular/core'
import { ToastController } from '@ionic/angular';

@Injectable({
    providedIn: 'root'
})


export class ToastProvider {

    constructor(public toastController: ToastController) {
    }


    async successToast(msg: string) {
        const toast = await this.toastController.create({
            message: msg,
            position: 'bottom',
            color: 'success',
            duration: 3000,
        })
        toast.present();
    }

    async erroToast(msg: string) {
        const toast = await this.toastController.create({
            message: msg,
            position: 'bottom',
            color: 'danger',
            duration: 3000,
        })
        toast.present();
    }

}