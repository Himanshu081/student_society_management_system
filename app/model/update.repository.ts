import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Update } from "./update.model";
// import { StaticDataSource } from "./static.datasource";
import { RestDataSource } from "./rest.datasource";
@Injectable()
export class UpdateRepository {
private updates: Update[] = [];
private loaded: boolean = false;
constructor(private dataSource: RestDataSource) { }
loadUpdates() {
this.loaded = true;
this.dataSource.getUpdates()
.subscribe(updates => this.updates = updates);
}
getUpdates(): Update[] {
    if (!this.loaded) {
        this.loadUpdates();
        }
return this.updates;
}
saveUpdate(update: Update): Observable<Update> {
    return this.dataSource.saveUpdate(update);
    }
    updateUpdate(update: Update) {
this.dataSource.updateUpdate(update).subscribe(update => {
this.updates.splice(this.updates.
findIndex(o => o.id == update.id), 1, update);
});
}
deleteUpdate(id: number) {
this.dataSource.deleteUpdate(id).subscribe(update => {
this.updates.splice(this.updates.findIndex(o => id == o.id));
});
}
    }