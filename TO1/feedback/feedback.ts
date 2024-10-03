export class feedback{
    id:number;
    name:string;
    email_address:string;
    phone_number:string;
    comet:string;

    constructor(id:number,name:string,email_address:string,phone_number:string,comet:string){
       this.id=id;
        this.name=name;
        this.email_address=email_address;
        this.phone_number=phone_number;
        this.comet=comet;
    }
}