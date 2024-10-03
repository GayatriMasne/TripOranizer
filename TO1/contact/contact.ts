export class contact{
    id:number;
    your_name:string;
    email_address:string;
    phone_number:number;
    how_can_we_help:string;

    constructor(id:number,your_name:string,email_address:string,phone_number:number,how_can_we_help:string){
       this.id=id;
        this.your_name=your_name;
        this.email_address=email_address;
        this.phone_number=phone_number;
        this.how_can_we_help=how_can_we_help;
    }
}