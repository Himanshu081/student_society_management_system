import { Injectable } from "@angular/core";
import { Student } from "./student.model";
// import { StaticDataSource } from "./static.datasource";
import { RestDataSource } from "./rest.datasource";
@Injectable()
export class StudentRepository {
private students: Student[] = [];
private societynames: string[] = [];
constructor(private dataSource: RestDataSource) {
dataSource.getStudents().subscribe(data => {
this.students = data;
this.societynames = data.map(p => p.societyname)
.filter((c, index, array) => array.indexOf(c) == index).sort();
});
}
getStudents(societyname: string = null): Student[] {
    return this.students
    .filter(p => societyname == null || societyname == p.societyname).sort((a,b)=>(a.events<b.events)?1:-1);
    }
    getStudent(id: number): Student {
    return this.students.find(p => p.id == id);
    }
    getsocietynames(): string[] {
    return this.societynames;
    }
    saveStudent(student: Student) {
        if (student.id == null || student.id == 0) {
        this.dataSource.saveStudent(student)
        .subscribe(p => this.students.push(p));
        } else {
        this.dataSource.updateStudent(student)
        .subscribe(p => {
        this.students.splice(this.students.
        findIndex(p => p.id == student.id), 1, student);
        });
        }
        }
        deleteStudent(id: number) {
        this.dataSource.deleteStudent(id).subscribe(p => {
        this.students.splice(this.students.
        findIndex(p => p.id == id), 1);
        })
        }
}