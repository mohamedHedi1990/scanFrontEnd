import { BrowserModule } from '@angular/platform-browser';
import {LOCALE_ID, NgModule} from '@angular/core';

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
import { ListReportsComponent } from './list-reports/list-reports.component';
import { InterfaceListReportsComponent } from './interface-list-reports/interface-list-reports.component';
import { TargetReportDetailsComponent } from './target-report-details/target-report-details.component';
import { InterfaceTargetReportDetailsComponent } from './interface-target-report-details/interface-target-report-details.component';
import { GlobalReportComponent } from './global-report/global-report.component';
import { ListeRapportGlobalComponent } from './liste-rapport-global/liste-rapport-global.component';
import { InterfaceListGlobalReportsComponent } from './interface-list-global-reports/interface-list-global-reports.component';
import { ConfigureGlobalScanComponent } from './configure-global-scan/configure-global-scan.component';
import { InterfaceConfigureGlobalScanComponent } from './interface-configure-global-scan/interface-configure-global-scan.component';
import {DatePipe} from '@angular/common';
import { SaidComponent } from './said/said.component';
const appRoutes: Routes = [
  { path: '', component: LoginComponent },
  // { path: 'menu', component: MenuComponent },
  // { path: 'hMenu', component: HorizontalMenuComponent },
  { path: 'acceuil', component: AcceuilComponent },
  { path: 'new_target', component: InterfaceNewTargetComponent },
  { path: 'target_list', component: InterfaceListTargetsComponent },
  // { path: 'nmapReport/:id/:ipAddress/:name', component: NpmReportComponent },
  { path: 'lastReport/:targetName', component: InterfaceTargetReportComponent },
  { path: 'allReports/:targetName', component: InterfaceListReportsComponent },
  { path: 'report/:reportId', component: InterfaceTargetReportDetailsComponent },
  { path: 'global-reports', component: InterfaceListGlobalReportsComponent },
  { path: 'configure-global-reports', component: InterfaceConfigureGlobalScanComponent }

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
    InterfaceTargetReportComponent,
    ListReportsComponent,
    InterfaceListReportsComponent,
    TargetReportDetailsComponent,
    InterfaceTargetReportDetailsComponent,
    GlobalReportComponent,
    ListeRapportGlobalComponent,
    InterfaceListGlobalReportsComponent,
    ConfigureGlobalScanComponent,
    InterfaceConfigureGlobalScanComponent,
    SaidComponent
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
  providers: [DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
