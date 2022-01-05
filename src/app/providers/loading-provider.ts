import { Injectable } from '@angular/core'
import { LoadingController } from '@ionic/angular';

@Injectable({
    providedIn: 'root'
})

export class LoadingProvider {


    public isLoading: boolean = false;

    constructor(public loadingController: LoadingController) {

    }

    async loadingPresent(message: string) {
        this.isLoading = true;

        return await this.loadingController.create({
            message: message,
            spinner: 'bubbles'
        }).then(a => {
            a.present().then(() => {
                if (!this.isLoading) {
                    a.dismiss().then(() => console.log('abort loading'))
                }
            })
        })
    }

    async loadingDismiss() {
        this.isLoading = false;
        return await this.loadingController.dismiss();
    }

}