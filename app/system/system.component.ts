import { Component } from "@angular/core";
import { Student } from "../model/student.model";
import { StudentRepository } from "../model/student.repository";
import { Record } from '../model/record.model';
import { Router } from "@angular/router";   
@Component({
selector: "system",
templateUrl: "system.component.html"
})
export class SystemComponent {
    public selectedSocietyname = null;
    public studentsPerPage = 4;
    public selectedPage = 1;
    constructor(private repository: StudentRepository,
        private record: Record,
        private router: Router) { }
get students(): Student[] {
    let pageIndex = (this.selectedPage - 1) * this.studentsPerPage
    return this.repository.getStudents(this.selectedSocietyname)
    .slice(pageIndex, pageIndex + this.studentsPerPage);
}
get societynames(): string[] {
return this.repository.getsocietynames();
}
changeSocietyname(newSocietyname?: string) {
this.selectedSocietyname = newSocietyname;
}
changePage(newPage: number) {
    this.selectedPage = newPage;
    }
    changePageSize(newSize: number) {
    this.studentsPerPage = Number(newSize);
    this.changePage(1);
    }
    get pageCount(): number {
        return Math.ceil(this.repository
        .getStudents(this.selectedSocietyname).length / this.studentsPerPage)
        }
        addStudentToRecord(student: Student) {
            this.record.addLine(student);
            this.router.navigateByUrl("/record");
            }
}