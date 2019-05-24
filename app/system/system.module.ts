import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { ModelModule } from "../model/model.module";
import { SystemComponent } from "./system.component";
import { CounterDirective } from './counter.directive';
import { RecordSummaryComponent } from './recordSummary.component';
import { RecordDetailComponent } from './recordDetail.component';
import { SaveComponent } from './save.component';
import { RouterModule } from '@angular/router';
@NgModule({
imports: [ModelModule, BrowserModule, FormsModule, RouterModule],
declarations: [SystemComponent, CounterDirective, RecordSummaryComponent, RecordDetailComponent, SaveComponent],
exports: [SystemComponent, RecordDetailComponent, SaveComponent]
})
export class SystemModule { }