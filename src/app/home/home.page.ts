import { Component } from '@angular/core';

declare var navigator: any;

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

    constructor() {}
  
    capture() {
        var captureSuccess = function( mediaFiles) {    // <-- this never is called
            console.log("OK", mediaFiles);
        }

        var captureError = function( error) {           // <-- this never is called
            console.log("ERROR", error);
        }

        navigator.device.capture.captureVideo(captureSuccess, captureError, { limit: 1 });
    }
}
