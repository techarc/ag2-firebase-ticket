import {Injectable} from "@angular/core";
import {Ticket, TicketFolder} from "../models/ticket";

@Injectable()
export class TicketFolerService {

    private ticketfoler:Array<TicketFolder> = [
        new TicketFolder(1, "Folder 1"),
        new TicketFolder(2, "Folder 2"),
        new TicketFolder(3, "Folder 3"),
        new TicketFolder(4, "Folder 4"),
        new TicketFolder(5, "Folder 5")
    ];

    get():Array<TicketFolder> {
        return this.ticketfoler;
    }

    add(id:number, name:string) {
        this.ticketfoler.push(new TicketFolder(id, name));
    }

}
export class TicketService {

    private tickets:Array<Ticket> = [
        new Ticket(1, 1, "ticket 1", "Ticket 1 content"),
        new Ticket(2, 1, "ticket 2", "Ticket 2 content"),
        new Ticket(3, 3, "ticket 3", "Ticket 3 content"),
        new Ticket(4, 2, "ticket 4", "Ticket 4 content"),
        new Ticket(5, 4, "ticket 5", "Ticket 5 content"),
        new Ticket(6, 5, "ticket 6", "Ticket 6 content"),
        new Ticket(7, 4, "ticket 7", "Ticket 7 content")
    ];

    get():Array<Ticket> {
        return this.tickets;
    }

    getbyfolder(folder_id: number):Array<Ticket> {
        let filter_ticket:Array<Ticket> = [];
        this.tickets.forEach(function(ticket, key) {
            if (ticket.folder_id === folder_id) {
                filter_ticket.push(ticket);
            }
        });
        return filter_ticket;
    }

    add(id:number, folder_id:number, title:string, content:string) {
        this.tickets.push(new Ticket(id, folder_id, title, content));
    }

}