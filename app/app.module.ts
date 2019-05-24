import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { AppComponent } from "./app.component";
import { SystemModule } from "./system/system.module";
import { SystemComponent } from "./system/system.component";
import { SaveComponent } from "./system/save.component";
import { RecordDetailComponent } from "./system/recordDetail.component";
import { RouterModule } from "@angular/router";
import { SystemFirstGuard } from "./systemFirst.guard";
@NgModule({
imports: [BrowserModule, SystemModule,
RouterModule.forRoot([
{ path: "system", component: SystemComponent,
canActivate: [SystemFirstGuard] },
{ path: "record", component: RecordDetailComponent,
canActivate: [SystemFirstGuard] },
{ path: "save", component: SaveComponent,
canActivate: [SystemFirstGuard] },
{
  path: "admin",
  loadChildren: "./admin/admin.module#AdminModule",
  canActivate: [SystemFirstGuard]
  },
{ path: "**", redirectTo: "/system" }
])],
providers: [SystemFirstGuard],
declarations: [AppComponent],
bootstrap: [AppComponent]
})
export class AppModule { }