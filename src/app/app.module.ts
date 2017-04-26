import {NgModule}      from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {MaterialModule} from '@angular/material';
import 'hammerjs';
import {AppComponent} from "./app.component";
import {TicketBoxComponent} from "./components/ticket/ticket-box.component";
import {TicketDetailComponent} from "./components/ticket/ticket-detail.component";
// import {TaskComponent} from "./todo/components/task.component";

import {routing, appRoutingProviders} from './app.routing';
import {FormsModule} from "@angular/forms";
import {AngularFireModule} from 'angularfire2';

const firebaseConfig = {
    apiKey: 'AIzaSyBf5lHeRgAHbj8GNHPgbKqiS-NOE9B0ZjE',
    databaseURL: 'https://airhost-test-3771e.firebaseio.com'
};
@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        routing,
        MaterialModule.forRoot(),
        AngularFireModule.initializeApp(firebaseConfig)
    ],
    declarations: [
        AppComponent,
        TicketBoxComponent,
        TicketDetailComponent
    ],
    providers: [
        appRoutingProviders
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
