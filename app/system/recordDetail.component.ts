import { Component } from "@angular/core";
import { Record } from '../model/record.model';
@Component({
templateUrl: "recordDetail.component.html"
})
export class RecordDetailComponent {
    constructor(public record: Record) { }
  
}