import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { LoginComponent } from './login/login.component';
import { NewTargetComponent } from './new-target/new-target.component';
import { ListTargetsComponent } from './list-targets/list-targets.component';
import { InterfaceNewTargetComponent } from './interface-new-target/interface-new-target.component';
import { InterfaceListTargetsComponent } from './interface-list-targets/interface-list-targets.component';
import { HorizontalMenuComponent } from './horizontal-menu/horizontal-menu.component';
import { AcceuilComponent } from './acceuil/acceuil.component';

import {Routes, RouterModule} from '@angular/router';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { Chart1Component } from './chart1/chart1.component';
import { jqxChartModule } from 'jqwidgets-ng/jqxchart';
import { Chart2Component } from './chart2/chart2.component';
import { ChartsModule } from 'ng2-charts';
import { NpmReportComponent } from './npm-report/npm-report.component';
import { TargetReportComponent } from './target-report/target-report.component';
import { InterfaceTargetReportComponent } from './interface-target-report/interface-target-report.component';
const appRoutes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'menu', component: MenuComponent },
  { path: 'hMenu', component: HorizontalMenuComponent },
  { path: 'acceuil', component: AcceuilComponent },
  { path: 'new_target', component: InterfaceNewTargetComponent },
  { path: 'target_list', component: InterfaceListTargetsComponent },
  { path: 'nmapReport/:id/:ipAddress/:name', component: NpmReportComponent },
  { path: 'lastReport/:targetName', component: InterfaceTargetReportComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    LoginComponent,
    NewTargetComponent,
    ListTargetsComponent,
    InterfaceNewTargetComponent,
    InterfaceListTargetsComponent,
    HorizontalMenuComponent,
    AcceuilComponent,
    Chart1Component,
    Chart2Component,
    NpmReportComponent,
    TargetReportComponent,
    InterfaceTargetReportComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    jqxChartModule,
    ChartsModule,
    RouterModule.forRoot(appRoutes),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
