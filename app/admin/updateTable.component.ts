import { Component } from "@angular/core";
import { Update } from "../model/update.model";
import { UpdateRepository } from "../model/update.repository";
@Component({
templateUrl: "updateTable.component.html"
})
export class UpdateTableComponent {
includeShipped = false;
constructor(private repository: UpdateRepository) {}
getUpdates(): Update[] {
return this.repository.getUpdates()
.filter(o => this.includeShipped || !o.shipped);
}
markShipped(update: Update) {
update.shipped = true;
this.repository.updateUpdate(update);
}
delete(id: number) {
    this.repository.deleteUpdate(id);
    }
    }