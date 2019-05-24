import { Injectable } from "@angular/core";
import { Student } from "./student.model";
@Injectable()
export class Record {
public lines: RecordLine[] = [];
public itemCount: number = 0;
public recordRollno: number = 0;
addLine(student: Student, quantity: number = 1) {
    this.lines.pop();
let line = this.lines.find(line => line.student.id == student.id);
if (line != undefined) {
line.quantity += quantity;
} else {
this.lines.push(new RecordLine(student, quantity));
}
// this.recalculate();
}
// updateQuantity(student: Student, quantity: number) {
// let line = this.lines.find(line => line.student.id == student.id);
// if (line != undefined) {
// line.quantity = Number(quantity);
// }
// // this.recalculate();
// }
removeLine(id: number) {
let index = this.lines.findIndex(line => line.student.id == id);
this.lines.splice(index, 1);
// this.lines.Remove(id);
// this.recalculate();
}
clear() {
this.lines = [];
this.itemCount = 0;
this.recordRollno = 0;
}
// private recalculate() {
// // this.itemCount = 0;
// // this.recordRollno = 0;
// this.lines.forEach(l => {
// this.itemCount += 1;
// this.recordRollno += (l.quantity * l.student.events);
// })
// }
}
export class RecordLine {
    constructor(public student: Student,
    public quantity: number) {}
    get lineTotal() {
    return this.quantity * this.student.events;
    }
    }