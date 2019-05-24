import { Injectable } from "@angular/core";
import { Student } from "./student.model";
import { Observable, from } from "rxjs";
import { Update } from "./update.model"
@Injectable()
export class StaticDataSource {
private students: Student[] = [
    new Student(1,1,"Google student club","Himanshu","CSE","May 14 2018", 20,7, 3),
    new Student(2,2,"Minvera Quizzing Society","Harsh","ECE","June 14 2018", 14,4, 5),
    new Student(3,3,"Enactus","Chirag","CIVIL","July 14 2018", 13,3,1),
    new Student(4,4,"National Service Scheme","Varun","CSE","August 14 2013",12, 5,3),
    new Student(5,5,"Google student club","Satish","ECE","September 14 2015", 9,7, 3),
    new Student(6,6,"Google student club","Kapil","CSE","November 14 2016", 15,2, 1),
    new Student(7,7,"Google student club","Harshit","ECE","December 14 2014",13 ,3, 2),
    new Student(8,8,"Enactus","Priya","CIVIL","January 14 2017", 7,6, 3),
    new Student(9,9,"Enactus","Ayush","CSE","February 14 2017", 12, 7,2),
    new Student(10,10,"National Service Scheme","Somit","CSE","March 14 2019", 18, 10,8),
    new Student(11,11,"National Service Scheme","Mahima","CSE","April  14 2019", 19,2, 4),
    new Student(12,12,"Minvera Quizzing Society","Himanshi","CIVIL","October 14 2019", 14, 12,7),
    new Student(13,13,"Minvera Quizzing Society","Rohan","ECE","Apriln1 2014", 4,2, 0),
    
   
];
getStudents(): Observable<Student[]> {
    return from([this.students]);
    }
    saveUpdate(update: Update): Observable<Update> {
        console.log(JSON.stringify(update));
        return from([update]);
        }
    }