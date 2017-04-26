import {Component, Input, OnInit} from "@angular/core";
import {Router} from "@angular/router";
import {AngularFire, FirebaseListObservable} from 'angularfire2';
import {TicketFolder, Ticket} from "../../models/ticket";
import {TicketFolerService, TicketService} from "../../services/ticket-service";

@Component({
    selector: 'ticket-box',
    templateUrl: './app/components/ticket/ticket-box.html',
    providers: [TicketFolerService, TicketService]
})
export class TicketBoxComponent implements OnInit {
	folders:Array<TicketFolder>;
	selTickets:Array<Ticket>;
    tickets: FirebaseListObservable<any[]>;
    constructor(private _ticketFolderService:TicketFolerService, private _ticketService:TicketService, private af: AngularFire) {
        this.folders = _ticketFolderService.get();
        this.getTickets(this.folders[0].id);
        this.tickets = af.database.list('/tickets');
    }

    ngOnInit() {
    	console.log(this.folders);
        // console.log("Todo component initialized with " + this.tasks.length + " tasks.");
    }

    getTickets(folder_id) {
    	this.selTickets = this._ticketService.getbyfolder(folder_id);
    }

    showDetails(ticket_id) {
    	console.log(ticket_id);
    }

}
