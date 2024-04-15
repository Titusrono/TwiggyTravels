import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DestinationComponent } from './destination/destination.component';
import { ServicesComponent } from './services/services.component';
import { PackagesComponent } from './packages/packages.component';
import { ContactComponent } from './contact/contact.component';
import { BlogComponent } from './blog/blog.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { BeachComponent } from './beach/beach.component';
import { AdventureComponent } from './adventure/adventure.component';
import { CitybreaksComponent } from './citybreaks/citybreaks.component';

export const routes: Routes = [
    {'path':'', 'title':'Home', component:HomeComponent},
    {'path':'destination', 'title':'Destination',component:DestinationComponent},
    {'path':'destination', children: [
        {'path':'beach', 'title':'destination | Beach', component:BeachComponent},
        {'path':'adventure', 'title':'destination | Adventure', component:AdventureComponent},
        {'path':'citybreaks','title':'destination | Citybreaks', component:CitybreaksComponent}
    ]},
    {'path':'services','title':'Services',component:ServicesComponent},
    {'path':'packages','title':'Packages',component:PackagesComponent},
    {'path':'contact','title':'Contact',component:ContactComponent},
    {'path':'blog', 'title':'Blog',component:BlogComponent},
    {'path':'**', 'title':'Pagenotfound', component:PagenotfoundComponent}
];
