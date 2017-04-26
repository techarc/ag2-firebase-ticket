import {Component, OnInit} from "@angular/core";
import {Ticket} from "../../models/ticket";
import {TicketService} from "../../services/ticket-service";
// import {TaskComponent} from "./task.component";

@Component({
    selector: 'ticket-list',
    templateUrl: './app/components/ticket/ticket-detail.html',
    styleUrls: ['./app/components/ticket/ticket-detail.css'],
    providers: [TicketService]
})
export class TicketDetailComponent implements OnInit {

    // todoCount:number;
    // selectedTask:Task;
    // tasks:Array<Task>;

    constructor(private _ticketService:TicketService) {
        // this.tasks = _taskService.getTasks();
        // this.calculateTodoCount();
    }

    ngOnInit() {
        // console.log("Todo component initialized with " + this.tasks.length + " tasks.");
    }
}