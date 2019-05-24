import { Component } from "@angular/core";
import { Record } from "../model/record.model";
@Component({
selector: "record-summary",
templateUrl: "recordSummary.component.html"
})
export class RecordSummaryComponent {
constructor(public record: Record) { }
}