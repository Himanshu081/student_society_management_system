import { Component } from "@angular/core";
import { NgForm } from "@angular/forms";
import { UpdateRepository } from "../model/update.repository";
import { Update } from "../model/update.model";
@Component({
templateUrl: "save.component.html",
styleUrls: ["save.component.css"]
})
export class SaveComponent {
updateSent: boolean = false;
submitted: boolean = false;
constructor(public repository: UpdateRepository,
public update: Update) {}
submitUpdate(form: NgForm) {
    this.submitted = true;
if (form.valid) {
this.repository.saveUpdate(this.update).subscribe(update => {
this.update.clear();
this.updateSent = true;
this.submitted = false;
});
}
}
}