import {Routes, RouterModule} from "@angular/router";
import {TicketBoxComponent} from "./components/ticket/ticket-box.component";
import {TicketDetailComponent} from "./components/ticket/ticket-detail.component";
import {ModuleWithProviders} from "@angular/core";

const appRoutes: Routes = [
    {path: '', redirectTo: 'ticket', pathMatch: 'full'},
    {path: 'ticket', component: TicketBoxComponent},
    {path: 'ticket/:id', component: TicketDetailComponent}
];

export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes, { useHash: true });
