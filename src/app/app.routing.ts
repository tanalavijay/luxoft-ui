import { Routes, RouterModule, PreloadAllModules } from "@angular/router";
import { ModuleWithProviders } from "@angular/core";
import { LayoutComponent } from "./layout/layout.component";
import { LoginComponent } from "./login/login.component";
import { NotFoundComponent } from "./not-found/not-found.component";
import { AdminComponent } from "./luxoft/admin/admin.component";
import { UserComponent } from "./luxoft/user/user.component";

export const routes: Routes = [
  {
    path: "luxoft",
    component: LayoutComponent,
    children: [
      { path: "", redirectTo: "admin", pathMatch: "full" },
      { path: "admin", component: AdminComponent, data: { breadcrumb: "Admin" } },
      { path: "profile", component: UserComponent, data: { breadcrumb: "Profile" } },
    ],
  },
  { path: "", redirectTo: "login", pathMatch: "full" },
  { path: "login", component: LoginComponent, data: { breadcrumb: "Login" } },
  {
    path: "**",
    component: NotFoundComponent,
    data: { breadcrumb: "Not found" },
  },
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes, {
     preloadingStrategy: PreloadAllModules,  // <- comment this line for activate lazy load
  // useHash: true
});
