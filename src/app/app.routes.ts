import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DemoComponent } from './demo/demo.component';
import { ResourceComponent } from './resource/resource.component';
import { FirstChildComponent } from './first-child/first-child.component';
import { SecondChildComponent } from './second-child/second-child.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

export const routes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
    {
        path: 'demo',
        component: DemoComponent,
        children: [
            { path: 'first-child', component: FirstChildComponent },
            { path: 'second-child', component: SecondChildComponent }
        ]
    },
    { path: 'resource/:id', component: ResourceComponent },
    { path: '**', component: PageNotFoundComponent}
];
