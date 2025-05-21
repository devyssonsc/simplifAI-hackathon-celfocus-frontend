import { Routes } from '@angular/router';
import { TransfersComponent } from './pages/transfers/transfers.component';
import { Details1Component } from './pages/details1/details1.component';
import { Export1Component } from './pages/export1/export1.component';
import { HomeComponent } from './pages/home/home.component';
import { PaymentsComponent } from './pages/payments/payments.component';
import { InvestmentsComponent } from './pages/investments/investments.component';
import { SuportComponent } from './pages/suport/suport.component';
import { AccountComponent } from './pages/account/account.component';

export const routes: Routes = [
    {
        path: "",
        redirectTo: "homepage",
        pathMatch: 'full'
    },
    {
        path: "homepage",
        component: HomeComponent
    },
    {
        path: "transfers",
        component: TransfersComponent
    },
    {
        path: "transfers/details1",
        component: Details1Component
    },
    {
        path: "transfers/details1/export1",
        component: Export1Component
    },
    {
        path: "payments",
        component: PaymentsComponent
    },
    {
        path: "investments",
        component: InvestmentsComponent
    },
    {
        path: "support",
        component: SuportComponent
    },
    {
        path: "account",
        component: AccountComponent
    }
];
