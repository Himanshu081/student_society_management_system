import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Student } from "./student.model";
import { Record } from "./record.model";
import { Update } from "./update.model";
import { map } from "rxjs/operators";
import { HttpHeaders } from '@angular/common/http';
const PROTOCOL = "http";
const PORT = 3500;
@Injectable()
export class RestDataSource {
baseUrl: string;
auth_token: string;
constructor(private http: HttpClient) {
this.baseUrl = `${PROTOCOL}://${location.hostname}:${PORT}/`;
}
getStudents(): Observable<Student[]> {
return this.http.get<Student[]>(this.baseUrl + "students");
}
saveUpdate(update: Update): Observable<Update> {
return this.http.post<Update>(this.baseUrl + "updates", update);
}
authenticate(user: string, pass: string): Observable<boolean> {
    return this.http.post<any>(this.baseUrl + "login", {
    name: user, password: pass
    }).pipe(map(response => {
    this.auth_token = response.success ? response.token : null;
    return response.success;
    }));
    }
    saveStudent(student: Student): Observable<Student> {
        return this.http.post<Student>(this.baseUrl + "students",
        student, this.getOptions());
        }
        updateStudent(student): Observable<Student> {
        return this.http.put<Student>(`${this.baseUrl}students/${student.id}`,
        student, this.getOptions());
        }
        deleteStudent(id: number): Observable<Student> {
        return this.http.delete<Student>(`${this.baseUrl}students/${id}`,
        this.getOptions());
        }
        getUpdates(): Observable<Update[]> {
        return this.http.get<Update[]>(this.baseUrl + "updates", this.getOptions());
        }
        deleteUpdate(id: number): Observable<Update> {
        return this.http.delete<Update>(`${this.baseUrl}updates/${id}`,
        this.getOptions());
        }
        updateUpdate(update: Update): Observable<Update> {
        return this.http.put<Update>(`${this.baseUrl}updates/${update.id}`,
        this.getOptions());
        }
        private getOptions() {
        return {
        headers: new HttpHeaders({
        "Authorization": `Bearer<${this.auth_token}>`
        })
        }
        }
}