import { Component } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";
import { NgForm } from "@angular/forms";
import { Student } from "../model/student.model";
import { StudentRepository } from "../model/student.repository"
import { UpdateRepository } from "../model/update.repository";
import { Update } from "../model/update.model";
@Component({
templateUrl: "studentEditor.component.html"
})
export class StudentEditorComponent {
    newStudent: boolean = false;
added: boolean = false;
editing: boolean = false;
student: Student = new Student();
constructor(private repository: StudentRepository,
private router: Router,public reposito: UpdateRepository,
public update: Update,
activeRoute: ActivatedRoute) {
this.editing = activeRoute.snapshot.params["mode"] == "edit";
if (this.editing) {
Object.assign(this.student,
repository.getStudent(activeRoute.snapshot.params["id"]));
}
}
save(form: NgForm) {
    this.added = true;
if (form.valid) {
this.reposito.saveUpdate(this.update).subscribe(update => {
this.update.clear();
this.newStudent = true;
this.added = false;
});
this.repository.saveStudent(this.student);
this.router.navigateByUrl("/admin/main/students");
}
}
// elective = ["Advance JAVA", "Big Data", "Cyber Security", "IOT"];
}