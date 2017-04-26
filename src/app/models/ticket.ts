export class Ticket {

    constructor(public id:number, public folder_id:number, public title:string, public content:string) {
    }

}

export class TicketFolder {

    constructor(public id:number, public name:string) {
    }

}