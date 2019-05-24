import { Component } from "@angular/core";
import { Student } from "../model/student.model";
import { StudentRepository } from "../model/student.repository";
@Component({
templateUrl: "studentTable.component.html"
})
export class StudentTableComponent {
    constructor(private repository: StudentRepository) { }
getStudents(): Student[] {
return this.repository.getStudents();
}
deleteStudent(id: number) {
this.repository.deleteStudent(id);
}
}