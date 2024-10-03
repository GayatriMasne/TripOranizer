export class Booking{
  id:number
name:string
Birthdate:string
address:string
email :string
phone_number:string
alternate_number:string
aadharcard_no :string
pancard_no :string
destination :string
hotelcategory :string
noofdays :string
monthoftravel :string
triptype :string
adults :number
children :number
startdate :string
enddate:string
from:string
typeofpackage :string
timecall:string
touryouwant :string
additionalrequriment:string

constructor(id:number,na:string,br:string,add:string,ema:string,pho:string,alt:string,
  aadh:string,pan:string,des:string,hot:string,noo:string,month:string,trip:string,adults :number,
  chil :number,star :string,end:string,fro:string,typ :string,time:string,toury :string,additi:string)
  {

this.id=id;
this.name=na;
this.Birthdate=br;
this.address=add;
this.email=ema;
this.phone_number=pho;
this.alternate_number=alt;
this.aadharcard_no=aadh;
this.pancard_no=pan;
this.destination=des;
this.hotelcategory=hot;
this.noofdays=noo;
this.monthoftravel=month;
this.triptype=trip;
this.adults=adults;
this.children=chil;
this.startdate=star;
this.enddate=end;
this.from=fro;
this.typeofpackage=typ;
this.timecall=time;
this.touryouwant=toury;
this.additionalrequriment=additi;   
}
}