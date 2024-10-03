import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { PlacetogoComponent } from './placetogo/placetogo.component';
import { RegistationComponent } from './registation/registation.component';
import { LoginComponent } from './login/login.component';
import { ContactComponent } from './contact/contact.component';
import { ThingtodoComponent } from './thingtodo/thingtodo.component';
import { HoneymoontripComponent } from './honeymoontrip/honeymoontrip.component';
import { ManaliComponent } from './manali/manali.component';
import { BookingComponent } from './booking/booking.component';
import { GoaComponent } from './goa/goa.component';
import { ShimlaComponent } from './shimla/shimla.component';
import { JammuComponent } from './jammu/jammu.component';
import { MunnerComponent } from './munner/munner.component';
import { SolotripComponent } from './solotrip/solotrip.component';

import { GrouptripComponent } from './grouptrip/grouptrip.component';
import { CampingComponent } from './camping/camping.component';
import { RoadtripComponent } from './roadtrip/roadtrip.component';
import { BusinesstripComponent } from './businesstrip/businesstrip.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { PrewedingComponent } from './preweding/preweding.component';

import { BirthdayparyComponent } from './birthdaypary/birthdaypary.component';
import { BachelorpartyComponent } from './bachelorparty/bachelorparty.component';
import { AllbookingComponent } from './allbooking/allbooking.component';
import { LogoutComponent } from './logout/logout.component';
import { PaymentsuccessComponent } from './paymentsuccess/paymentsuccess.component';
import { PaymentComponent } from './payment/payment.component';

export const routes: Routes = [
    {path:'home',component:HomeComponent},
    {path:'about',component:AboutComponent},
    {path:'placetogo',component:PlacetogoComponent},
    {path:'registation',component:RegistationComponent},
    {path:'login',component:LoginComponent},
    {path:'contact',component:ContactComponent},
    {path:'thingtodo',component:ThingtodoComponent},
    {path:'honeymoontrip',component:HoneymoontripComponent},
    {path:'manali',component:ManaliComponent},
    {path:'booking',component:BookingComponent},
    {path:'goa',component:GoaComponent},
    {path:'shimla',component:ShimlaComponent},
    {path:'jammu',component:JammuComponent},
    {path:'munner',component:MunnerComponent},
    {path:'solotrip',component:SolotripComponent},
    {path:'grouptrip',component:GrouptripComponent},
    {path:'camping',component:CampingComponent},
    {path:'roadtrip',component:RoadtripComponent},
    {path:'businesstrip',component:BusinesstripComponent},
    {path:'feedback',component:FeedbackComponent},
    {path:'preweding',component:PrewedingComponent},
    {path:'bachelorparty',component:BachelorpartyComponent},
    {path:'birthdaypary',component:BirthdayparyComponent},
    {path:'campingparty',component:CampingComponent},
    {path:'allbooking',component:AllbookingComponent},
    {path:'logout',component:LogoutComponent},
    {path:'paymentsuccess',component:PaymentsuccessComponent},
    {path:'payment',component:PaymentComponent},


];
