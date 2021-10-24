import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { PerfectScrollbarModule } from "ngx-perfect-scrollbar";
import { PERFECT_SCROLLBAR_CONFIG } from "ngx-perfect-scrollbar";
import { PerfectScrollbarConfigInterface } from "ngx-perfect-scrollbar";
import { SharedModule } from "./shared/shared.module";
import { routing } from "./app.routing";
import { AppComponent } from "./app.component";
import { LayoutComponent } from "./layout/layout.component";
import { NotFoundComponent } from "./not-found/not-found.component";
import { AppSettings } from "./app.settings";
import { LoginComponent } from "./login/login.component";
import { SidenavComponent } from "./theme/components/sidenav/sidenav.component";
import { VerticalMenuComponent } from "./theme/components/menu/vertical-menu/vertical-menu.component";
import { HorizontalMenuComponent } from "./theme/components/menu/horizontal-menu/horizontal-menu.component";
import { BreadcrumbComponent } from "./theme/components/breadcrumb/breadcrumb.component";
import { FlagsMenuComponent } from "./theme/components/flags-menu/flags-menu.component";
import { FullScreenComponent } from "./theme/components/fullscreen/fullscreen.component";
import { ApplicationsComponent } from "./theme/components/applications/applications.component";
import { ModalModule } from "ngx-bootstrap";
import { LocationStrategy, HashLocationStrategy } from "@angular/common";
import { HttpClientModule, HttpClientJsonpModule } from "@angular/common/http";
import { ToasterModule } from "angular2-toaster";
import { TableModule } from "primeng/table";
import { TabViewModule } from "primeng/tabview";
import { TooltipModule } from "ngx-tooltip";
import { DataTableModule } from "angular2-datatable";
import { AlertService } from "./shared/services/alert.service";
import { UserMenuComponent } from "./theme/components/user-menu/user-menu.component";
import { UserComponent } from './luxoft/user/user.component';
import { AdminComponent } from "./luxoft/admin/admin.component";
import { LuxoftService } from "./luxoft/luxoft.service";
import { XHRBackend,HttpModule } from '@angular/http';
import { AppInterceptorService } from "./shared/services/app-interceptor.service";
import { LoaderService } from "./shared/services/loader.service";

const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
  wheelPropagation: true,
  suppressScrollX: true,
};

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    TooltipModule,
    ReactiveFormsModule,
    PerfectScrollbarModule,
    ToasterModule.forRoot(),
    SharedModule,
    TabViewModule,
    routing,
    ModalModule.forRoot(),
    HttpModule,
    HttpClientModule,
    HttpClientJsonpModule,
    TableModule,
    DataTableModule,
  ],
  declarations: [
    AppComponent,
    LayoutComponent,
    NotFoundComponent,
    SidenavComponent,
    VerticalMenuComponent,
    HorizontalMenuComponent,
    BreadcrumbComponent,
    FlagsMenuComponent,
    FullScreenComponent,
    ApplicationsComponent,
    LoginComponent,
    AdminComponent,
    UserMenuComponent,
    UserComponent
  ],
  entryComponents: [
    VerticalMenuComponent,
  ],
  providers: [
    { provide: LocationStrategy, useClass: HashLocationStrategy },
    AppSettings,AlertService,LuxoftService,LoaderService,{provide: PERFECT_SCROLLBAR_CONFIG,useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG},
    { provide: XHRBackend, useClass: AppInterceptorService },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
